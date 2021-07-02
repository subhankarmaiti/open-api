var express = require("express");
var cors = require("cors");
var app = express();
const apiRoutes = require("./routers");
// middleware use
app.use(cors());
app.use(express.json());

app.use("/", apiRoutes);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
