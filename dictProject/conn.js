var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "More@1234",
  database: "entries",
});

 connection.connect(function(err){
    if(err) throw err;
    console.log("connected")
 });

// connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].solution);
// });

// connection.end();

module.exports = connection
