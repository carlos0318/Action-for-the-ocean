const express = require("express");
const usersRouters = require("./usersRoutes");

function routerApi(app) {
  const router = express.router();
  app.use("/api/v1", router);
  router.use("/users");
  router.use("/usersBeach");
}

module.exports = routerApi;
