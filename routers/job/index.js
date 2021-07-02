const route = require("express").Router();
const job = require("./job.json");
const jobs = require("./jobs.json");
route.jobRouter = {
  "/jobs": {
    get: {
      description: "List of all jobs available",
      summary: "Jobs API",
      tags: ["Job"],
      responses: {
        200: {
          description: "Returns list of jobs",
        },
      },
    },
  },
  "/jobs/{id}": {
    get: {
      description: "Job details",
      summary: "Jobs API",
      tags: ["Job"],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Job id",
          required: true,
          type: "string",
        },
      ],
      responses: {
        200: {
          description: "Returns a Job detals",
        },
      },
    },
  },
};

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
