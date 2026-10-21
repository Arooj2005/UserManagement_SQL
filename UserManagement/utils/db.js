const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "YOUR_MYSQL_PASSWORD", //Enter your password here
  database: "UserManagement",
  connectionLimit: 10
});


//Below Code is just foe testing whther the connection is successfull or not.

// pool.query("SELECT * FROM users", (err,results) => {
//   if(err) {
//     console.log("Query failed:", err);
//     return;
//   }

//   console.log(results);
// });

module.exports = pool;