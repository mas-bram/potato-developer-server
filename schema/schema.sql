-- Create database
CREATE DATABASE IF NOT EXISTS potato_db;
USE potato_db;

-- Category Table
CREATE TABLE IF NOT EXISTS post_category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Tag Table
CREATE TABLE IF NOT EXISTS post_tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Blogpost Table
CREATE TABLE IF NOT EXISTS blogpost (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post TEXT NOT NULL,
    category_id INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES post_category(id)
);

-- Junction table for blogpost ↔ tags (many-to-many)
CREATE TABLE IF NOT EXISTS blogpost_tag (
    blogpost_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (blogpost_id, tag_id),
    FOREIGN KEY (blogpost_id) REFERENCES blogpost(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES post_tag(id) ON DELETE CASCADE
);
