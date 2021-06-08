const dbconn = require("./conn");
const mysql = require("mysql");

var searchWord = function (word) {
  // console.log("The solution is: ", rows);
  return new Promise((resolve, reject) => {
    dbconn.query(
      "SELECT * FROM entries WHERE word = " + mysql.escape(word),
      function (err, rows, fields) {
        if (err) reject(err);
        resolve(rows);
      }
    );
  });
};

module.exports = searchWord;
