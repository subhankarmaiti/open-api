const router = require("express").Router();

router.use("/jobs", require("./job"));

module.exports = router;
