const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, my website works!</h1>");
});

app.listen(3000, () => {
  console.log("Server running! Open http://localhost:3000");
});
