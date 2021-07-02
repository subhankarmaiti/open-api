var express = require("express");
var cors = require("cors");
var app = express();
swaggerUI = require("swagger-ui-express");
const apiRoutes = require("./routers");

const swDocument = require("./swagger.def");

// middleware use
app.use(cors());
app.use(express.json());
app.use("/api-documentation", swaggerUI.serve, swaggerUI.setup(swDocument));
app.use("/", apiRoutes);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
