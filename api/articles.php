<?php
/**
 * Articles API Endpoint
 * Handles GET (fetch articles from MySQL) and POST (publish story or like article in MySQL)
 */

require_once __DIR__ . '/db.php';
$pdo = getDatabase();

$method = $_SERVER['REQUEST_METHOD'];

// Helper to format article row for frontend consumption
function formatArticleRow($row) {
    return [
        'id' => $row['id'],
        'title' => $row['title'],
        'subtitle' => $row['subtitle'] ?? $row['excerpt'],
        'category' => $row['category_name'] ?: strtoupper($row['category_slug']),
        'categorySlug' => $row['category_slug'],
        'badgeType' => $row['badge_type'] ?? 'default',
        'date' => $row['date_str'] ?: date('M d, Y', strtotime($row['created_at'])),
        'readTime' => $row['read_time'] ?: '4 min read',
        'author' => [
            'name' => $row['author_name'] ?: 'Editorial Board',
            'role' => $row['author_role'] ?: 'Staff Correspondent',
            'avatar' => $row['author_avatar'] ?: 'assets/images/author-1.jpg'
        ],
        'image' => $row['image'] ?: 'assets/images/hero-main.jpg',
        'trending' => (bool)$row['is_trending'],
        'isBreaking' => (bool)$row['is_breaking'],
        'views' => $row['views'] ?: '12.4k',
        'likes' => (int)$row['likes'],
        'excerpt' => $row['excerpt'],
        'content' => $row['content']
    ];
}

// ---------------------------------------------------------------------
// GET REQUESTS
// ---------------------------------------------------------------------
if ($method === 'GET') {
    // 1. Single Article by ID
    if (!empty($_GET['id'])) {
        $stmt = $pdo->prepare("SELECT * FROM `articles` WHERE `id` = :id LIMIT 1");
        $stmt->execute(['id' => $_GET['id']]);
        $row = $stmt->fetch();

        if ($row) {
            sendJsonResponse([
                'status' => 'success',
                'data' => formatArticleRow($row)
            ]);
        } else {
            sendJsonResponse([
                'status' => 'error',
                'message' => 'Article not found'
            ], 404);
        }
    }

    // 2. Filter by Category
    $category = $_GET['category'] ?? $_GET['cat'] ?? null;
    $search = $_GET['search'] ?? $_GET['q'] ?? null;
    $filter = $_GET['filter'] ?? 'all';
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;

    $query = "SELECT * FROM `articles` WHERE 1=1";
    $params = [];

    // Normalize category
    if ($category && $category !== 'all') {
        $c = strtolower(trim($category));
        // Category alias mapping
        if ($c === 'business' || $c === 'economy') {
            $query .= " AND (`category_slug` IN ('economy', 'business') OR `category_name` LIKE '%ECONOMY%' OR `category_name` LIKE '%BUSINESS%')";
        } elseif ($c === 'tech' || $c === 'technology') {
            $query .= " AND (`category_slug` IN ('technology', 'tech') OR `category_name` LIKE '%TECH%')";
        } elseif ($c === 'sports' || $c === 'sport') {
            $query .= " AND (`category_slug` IN ('sports', 'sport') OR `category_name` LIKE '%SPORT%')";
        } elseif ($c === 'culture' || $c === 'entertainment') {
            $query .= " AND (`category_slug` IN ('culture', 'entertainment') OR `category_name` LIKE '%CULTURE%' OR `category_name` LIKE '%ENTERTAINMENT%')";
        } elseif ($c === 'politics' || $c === 'lagos') {
            $query .= " AND (`category_slug` IN ('politics', 'lagos') OR `category_name` LIKE '%POLITICS%' OR `category_name` LIKE '%LAGOS%')";
        } elseif ($c === 'travel' || $c === 'tourism') {
            $query .= " AND (`category_slug` IN ('travel', 'tourism') OR `category_name` LIKE '%TRAVEL%')";
        } elseif ($c === 'science') {
            $query .= " AND (`category_slug` = 'science' OR `category_name` LIKE '%SCIENCE%')";
        } elseif ($c === 'world') {
            $query .= " AND (`category_slug` = 'world' OR `category_name` LIKE '%WORLD%')";
        } else {
            $query .= " AND (`category_slug` = :cat OR `category_name` LIKE :catLike)";
            $params['cat'] = $c;
            $params['catLike'] = '%' . $c . '%';
        }
    }

    // Search query
    if ($search) {
        $searchTerm = '%' . trim($search) . '%';
        $query .= " AND (`title` LIKE :s1 OR `excerpt` LIKE :s2 OR `content` LIKE :s3 OR `author_name` LIKE :s4)";
        $params['s1'] = $searchTerm;
        $params['s2'] = $searchTerm;
        $params['s3'] = $searchTerm;
        $params['s4'] = $searchTerm;
    }

    // Ordering
    if ($filter === 'latest') {
        $query .= " ORDER BY `created_at` DESC";
    } elseif ($filter === 'trending') {
        $query .= " ORDER BY `is_trending` DESC, `likes` DESC";
    } elseif ($filter === 'popular') {
        $query .= " ORDER BY `likes` DESC";
    } else {
        $query .= " ORDER BY `created_at` DESC";
    }

    $query .= " LIMIT " . max(1, min(100, $limit));

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();

    $articles = array_map('formatArticleRow', $rows);

    sendJsonResponse([
        'status' => 'success',
        'count' => count($articles),
        'data' => $articles
    ]);
}

// ---------------------------------------------------------------------
// POST REQUESTS (Like Article or Publish New Article)
// ---------------------------------------------------------------------
if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }

    $action = $input['action'] ?? $_GET['action'] ?? null;

    // Action: Like an article
    if ($action === 'like') {
        $id = $input['id'] ?? $_GET['id'] ?? null;
        if (!$id) {
            sendJsonResponse(['status' => 'error', 'message' => 'Article ID is required'], 400);
        }

        $stmt = $pdo->prepare("UPDATE `articles` SET `likes` = `likes` + 1 WHERE `id` = :id");
        $stmt->execute(['id' => $id]);

        $getStmt = $pdo->prepare("SELECT `likes` FROM `articles` WHERE `id` = :id");
        $getStmt->execute(['id' => $id]);
        $row = $getStmt->fetch();

        sendJsonResponse([
            'status' => 'success',
            'likes' => (int)($row['likes'] ?? 0)
        ]);
    }

    // Action: Publish a new story (Admin Desk)
    $title = trim($input['title'] ?? '');
    $excerpt = trim($input['excerpt'] ?? '');
    $content = trim($input['content'] ?? '');
    $categorySlug = trim($input['categorySlug'] ?? $input['category'] ?? 'politics');
    $categoryName = trim($input['categoryName'] ?? strtoupper($categorySlug));
    $authorName = trim($input['authorName'] ?? 'Editorial Desk');
    $authorRole = trim($input['authorRole'] ?? 'Special Correspondent');
    $image = trim($input['image'] ?? 'assets/images/hero-main.jpg');

    if (empty($title)) {
        sendJsonResponse(['status' => 'error', 'message' => 'Story title is required'], 400);
    }

    $newId = 'custom-' . time() . '-' . rand(100, 999);
    $dateStr = date('M d, Y');
    $readTime = max(2, ceil(str_word_count(strip_tags($content ?: $excerpt)) / 180)) . ' min read';

    $insertStmt = $pdo->prepare("INSERT INTO `articles` 
        (`id`, `title`, `subtitle`, `category_slug`, `category_name`, `badge_type`, `date_str`, `read_time`, `author_name`, `author_role`, `author_avatar`, `image`, `is_trending`, `is_breaking`, `views`, `likes`, `excerpt`, `content`)
        VALUES (:id, :title, :subtitle, :category_slug, :category_name, 'hot', :date_str, :read_time, :author_name, :author_role, 'assets/images/author-1.jpg', :image, 1, 0, '1.2k', 0, :excerpt, :content)");

    $insertStmt->execute([
        'id' => $newId,
        'title' => $title,
        'subtitle' => $input['subtitle'] ?? $excerpt,
        'category_slug' => strtolower($categorySlug),
        'category_name' => $categoryName,
        'date_str' => $dateStr,
        'read_time' => $readTime,
        'author_name' => $authorName,
        'author_role' => $authorRole,
        'image' => $image,
        'excerpt' => $excerpt,
        'content' => $content ?: "<p class='lead'>{$excerpt}</p>"
    ]);

    sendJsonResponse([
        'status' => 'success',
        'message' => 'Story published to MySQL database successfully',
        'articleId' => $newId
    ], 201);
}
