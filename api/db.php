<?php
/**
 * API Bootstrap & Database Helper
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../db/config.php';

function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

function getDatabase() {
    $pdo = getDbConnection();
    if (!$pdo) {
        sendJsonResponse([
            'status' => 'error',
            'message' => 'Unable to connect to MySQL database.'
        ], 500);
    }
    return $pdo;
}
