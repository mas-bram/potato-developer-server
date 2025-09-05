const express = require("express");
const app = express();
const port = 3000;

//create connection to db
const pool = mysql.createPool({
  host: "localhost", // or 127.0.0.1
  user: "root", // your MySQL username
  password: "", // your MySQL password
  database: "potato_server", // your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//static file
app.use(express.static("public"));

//use basic routes
app.use("/", require("./routes/basicRoutes"));
//use blog router
app.use("/blog", require("./routes/blogRoutes"));

app.listen(port, () => {
  console.log("potato developer server listening on port ${port}");
});
