var express = require("express");
var cors = require("cors");
var app = express();
var jobs = require("./file.json");

app.use(cors());
app.use(express.json());
app.get("/job/:id", function (req, res) {
  if (jobs[req.params.id]) {
    res.send(jobs[req.params.id]);
  } else {
    res.status(400).send({ message: "Not Found" });
  }
});
app.get("/jobs", function (req, res) {
  res.send(Object.values(jobs));
});
const port = process.env.port || 5000;
app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
