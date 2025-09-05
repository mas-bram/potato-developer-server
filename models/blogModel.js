const pool = require("../config/db");
async function createPost(content, category, tag) {
  const [result] = await pool.query(
    "INSERT INTO posts (content, category, tag) VALUES (?, ?, ?)",
    [content, category, tag]
  );
  return { id: result.insertId, content, category, tag };
}
async function getAllPost() {
  const [rows] = await pool.query("SELECT * FROM posts");
  return rows;
}
async function getPostById(id) {
  const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
  if (rows.length === 0) throw new Error("Post not found");
  return rows[0];
}
async function getPostByCategory(category) {
  const [rows] = await pool.query("SELECT * FROM posts WHERE category = ?", [
    category,
  ]);
  return rows;
}
async function getPostByTag(tag) {
  const [rows] = await pool.query("SELECT * FROM posts WHERE category = ?", [
    tag,
  ]);
  return rows;
}
async function updatePostById(id) {
  const [result] = await pool.query(
    "UPDATE posts SET content = ?, category = ?, tag = ? WHERE id = ?",
    [content, category, tag, id]
  );
  // If no rows updated, post not found
  if (result.affectedRows === 0) {
    return null;
  }

  // Return the updated post
  const [rows] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
  return rows[0];
}

async function deletePostById(id) {
  const [result] = await pool.query(
    "UPDATE posts SET deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL",
    [id]
  );

  if (result.affectedRows === 0) {
    return false; // not found or already deleted
  }

  return true;
}
async function hardDeletePostById(id) {
  const [result] = await pool.query(
    "UPDATE posts SET deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL",
    [id]
  );

  if (result.affectedRows === 0) {
    return false; // not found or already deleted
  }

  return true;
}

module.exports = pool;
