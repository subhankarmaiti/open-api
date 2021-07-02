const { jobRouter } = require("./routers/job");
module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Swagger Open API",
    version: "1.0.0",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  servers: [
    {
      url: process.env.NODE_ENV
        ? "https://open-api-for-all.herokuapp.com/"
        : "http://localhost:5000/",
      description: "Open API For All",
    },
  ],
  paths: { ...jobRouter },
};
