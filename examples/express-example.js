const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("I am in homepage");
});
app.get("/about", (req, res) => {
  if (req.query.name) {
    res.send("I am in about page" + " " + req.query.name);
  } else {
    res.send("I am in about page");
  }
});

app.listen(8000, () => {
  console.log("Server Success!");
});
