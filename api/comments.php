<?php
/**
 * Comments API Endpoint
 * Handles GET (fetch comments from MySQL) and POST (post new comment into MySQL)
 */

require_once __DIR__ . '/db.php';
$pdo = getDatabase();

$method = $_SERVER['REQUEST_METHOD'];

// GET Comments for Article
if ($method === 'GET') {
    $articleId = $_GET['article_id'] ?? $_GET['id'] ?? null;
    if (!$articleId) {
        sendJsonResponse(['status' => 'error', 'message' => 'article_id is required'], 400);
    }

    $stmt = $pdo->prepare("SELECT * FROM `comments` WHERE `article_id` = :id ORDER BY `created_at` DESC");
    $stmt->execute(['id' => $articleId]);
    $rows = $stmt->fetchAll();

    $comments = array_map(function($r) {
        $timestamp = strtotime($r['created_at']);
        $diff = time() - $timestamp;
        if ($diff < 60) {
            $timeStr = "Just now";
        } elseif ($diff < 3600) {
            $timeStr = floor($diff / 60) . " mins ago";
        } elseif ($diff < 86400) {
            $timeStr = floor($diff / 3600) . " hours ago";
        } else {
            $timeStr = date('M d, Y', $timestamp);
        }

        return [
            'id' => (int)$r['id'],
            'author' => $r['author_name'],
            'email' => $r['author_email'],
            'text' => $r['comment_text'],
            'time' => $timeStr,
            'likes' => (int)$r['likes']
        ];
    }, $rows);

    sendJsonResponse([
        'status' => 'success',
        'count' => count($comments),
        'data' => $comments
    ]);
}

// POST New Comment
if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }

    $articleId = trim($input['article_id'] ?? $input['articleId'] ?? '');
    $authorName = trim($input['author_name'] ?? $input['author'] ?? $input['name'] ?? '');
    $authorEmail = trim($input['author_email'] ?? $input['email'] ?? '');
    $commentText = trim($input['comment_text'] ?? $input['text'] ?? $input['comment'] ?? '');

    if (empty($articleId) || empty($authorName) || empty($commentText)) {
        sendJsonResponse([
            'status' => 'error',
            'message' => 'article_id, author_name, and comment_text are required'
        ], 400);
    }

    $stmt = $pdo->prepare("INSERT INTO `comments` (`article_id`, `author_name`, `author_email`, `comment_text`)
        VALUES (:article_id, :author_name, :author_email, :comment_text)");

    $stmt->execute([
        'article_id' => $articleId,
        'author_name' => $authorName,
        'author_email' => $authorEmail,
        'comment_text' => $commentText
    ]);

    $newId = $pdo->lastInsertId();

    sendJsonResponse([
        'status' => 'success',
        'message' => 'Comment saved to MySQL',
        'data' => [
            'id' => (int)$newId,
            'author' => $authorName,
            'time' => 'Just now',
            'text' => $commentText,
            'likes' => 0
        ]
    ], 201);
}
