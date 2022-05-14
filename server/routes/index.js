const express = require("express");
const usersRoutes = require("./usersRoutes");
const usersBeach = require("./usersBeach");

function routerApi(app) {
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/users", usersRoutes);
    router.use("/usersBeach", usersBeach);
}

module.exports = routerApi;
