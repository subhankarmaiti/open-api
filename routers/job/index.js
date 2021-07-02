const route = require("express").Router();
const job = require("./job.json");
const jobs = require("./jobs.json");

route.get("/:id", function (req, res) {
  if (job[req.params.id]) {
    res.send(job[req.params.id]);
  } else {
    res.status(400).send({ message: "Not Found" });
  }
});
route.get("/", function (req, res) {
  res.send(Object.values(jobs));
});

module.exports = route;
