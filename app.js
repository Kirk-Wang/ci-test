const express = require("express");
const app = express();
const port = process.env.PORT || 8099;

app.get("/", (req, res) => {
  res.send("crazy boy!!!");
});

app.get("/user", function(req, res) {
  res.status(200).json({ name: "xxx" });
});

// listen 8080 port
app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
