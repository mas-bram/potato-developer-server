const mysql = require("mysql2/promise");

// Create connection pool (promise-based for async/await)
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
