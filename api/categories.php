<?php
/**
 * Categories API Endpoint
 * Returns all categories with live counts from MySQL
 */

require_once __DIR__ . '/db.php';
$pdo = getDatabase();

$stmt = $pdo->query("
    SELECT c.*, COUNT(a.id) as article_count 
    FROM `categories` c 
    LEFT JOIN `articles` a ON (
        c.slug = a.category_slug 
        OR (c.slug = 'economy' AND a.category_slug = 'business')
        OR (c.slug = 'technology' AND a.category_slug = 'tech')
        OR (c.slug = 'culture' AND a.category_slug = 'entertainment')
    )
    GROUP BY c.id
    ORDER BY c.id ASC
");
$rows = $stmt->fetchAll();

$categories = array_map(function($r) {
    return [
        'slug' => $r['slug'],
        'name' => $r['name'],
        'badge' => $r['badge'],
        'headline' => $r['headline'],
        'description' => $r['description'],
        'editor' => $r['editor'],
        'accentColor' => $r['accent_color'],
        'heroTag' => $r['hero_tag'],
        'articleCount' => (int)$r['article_count']
    ];
}, $rows);

sendJsonResponse([
    'status' => 'success',
    'count' => count($categories),
    'data' => $categories
]);
