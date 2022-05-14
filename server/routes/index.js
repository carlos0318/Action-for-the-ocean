const express = require("express");
const usersRoutes = require("./usersRoutes");

function routerApi(app) {
  const router = express.router();
  app.use("/api/v1", router);
  router.use("/users", usersRoutes);
  router.use("/usersBeach");
}

module.exports = routerApi;
