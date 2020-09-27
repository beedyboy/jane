const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/dist/jane"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/jane/index.html"));
});

app.listen(port);
