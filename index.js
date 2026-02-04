const express = require("express");
const _ = require("lodash");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Secure NodeJS Pipeline!");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
