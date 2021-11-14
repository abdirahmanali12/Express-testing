const express = require("express");
const port = 4000;
const app = express();
app.get("/", (req, res) => {
  res.send("<h4>Server on port: " + port + "</h4>");
});
app.listen(port, () => console.log("started ", port));
