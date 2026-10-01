-- =====================================================================
-- NIGERIAN UPDATES - MAIKBLOG DATABASE SCHEMA
-- Compatible with MySQL 5.7+ / MySQL 8.0+ / MariaDB (XAMPP default)
-- =====================================================================

CREATE DATABASE IF NOT EXISTS `maikblog_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `maikblog_db`;

-- ---------------------------------------------------------------------
-- Table: categories
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(50) NOT NULL UNIQUE,
  `name` VARCHAR(100) NOT NULL,
  `badge` VARCHAR(100) DEFAULT '',
  `headline` VARCHAR(255) DEFAULT '',
  `description` TEXT,
  `editor` VARCHAR(150) DEFAULT 'Editorial Board',
  `accent_color` VARCHAR(20) DEFAULT '#2563eb',
  `hero_tag` VARCHAR(100) DEFAULT '',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Table: authors
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `authors` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `role` VARCHAR(150) NOT NULL,
  `avatar` VARCHAR(255) DEFAULT 'assets/images/author-1.jpg',
  `bio` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Table: articles
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `articles` (
  `id` VARCHAR(100) PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `subtitle` VARCHAR(255) DEFAULT '',
  `category_slug` VARCHAR(50) NOT NULL,
  `category_name` VARCHAR(100) DEFAULT '',
  `badge_type` VARCHAR(50) DEFAULT 'default',
  `date_str` VARCHAR(50) DEFAULT '',
  `read_time` VARCHAR(50) DEFAULT '4 min read',
  `author_id` INT DEFAULT NULL,
  `author_name` VARCHAR(150) DEFAULT 'Editorial Board',
  `author_role` VARCHAR(150) DEFAULT 'Staff Correspondent',
  `author_avatar` VARCHAR(255) DEFAULT 'assets/images/author-1.jpg',
  `image` VARCHAR(255) DEFAULT 'assets/images/hero-main.jpg',
  `is_trending` TINYINT(1) DEFAULT 0,
  `is_breaking` TINYINT(1) DEFAULT 0,
  `is_video` TINYINT(1) DEFAULT 0,
  `video_duration` VARCHAR(20) DEFAULT '',
  `views` VARCHAR(50) DEFAULT '12.4k',
  `likes` INT DEFAULT 0,
  `excerpt` TEXT,
  `content` LONGTEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (`category_slug`),
  INDEX (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Table: comments
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `comments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `article_id` VARCHAR(100) NOT NULL,
  `author_name` VARCHAR(100) NOT NULL,
  `author_email` VARCHAR(150) DEFAULT '',
  `comment_text` TEXT NOT NULL,
  `likes` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------------------------------------------------------------------
-- Table: subscribers
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `subscribers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
