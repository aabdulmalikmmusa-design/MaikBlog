<?php
/**
 * Database Configuration & PDO Factory
 * Supports MySQL / MariaDB in XAMPP
 */

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'maikblog_db');
define('DB_PORT', '3306');

function getDbConnection() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    try {
        // Connect to MySQL server
        $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];

        $rootPdo = new PDO($dsn, DB_USER, DB_PASS, $options);

        // Ensure database exists
        $rootPdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");

        // Now connect specifically to the database
        $dbDsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $pdo = new PDO($dbDsn, DB_USER, DB_PASS, $options);

        // Auto-initialize tables if needed
        ensureTablesExist($pdo);

        return $pdo;
    } catch (PDOException $e) {
        // Return null or handle error gracefully
        error_log("Database Connection Error: " . $e->getMessage());
        return null;
    }
}

function ensureTablesExist($pdo) {
    static $checked = false;
    if ($checked) return;

    $tableCheck = $pdo->query("SHOW TABLES LIKE 'articles'")->fetch();
    if (!$tableCheck) {
        // Tables not initialized yet, run setup
        $schemaFile = __DIR__ . '/schema.sql';
        if (file_exists($schemaFile)) {
            $sql = file_get_contents($schemaFile);
            $pdo->exec($sql);
        }
    }
    $checked = true;
}
