const express = require("express");
const path = require("path");
const searchWord = require("./words");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/dict.html");
});

// POST method route
app.post("/search", function (req, res) {
  let word = req.body.word;
  searchWord(word).then(function (result) {
    console.log(result);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
