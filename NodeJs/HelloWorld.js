//var http = require("http");
var dt = require("./myModule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//     console.log("Runing");
//   })
//   .listen(8080);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dt.myDate());
//     res.end();
//   })
//   .listen(8080);

// const user = require("./userfile");
// console.log(
//   user.getName() +
//     " lives in " +
//     user.getLocation() +
//     " and was born on " +
//     user.dob
// );

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);
