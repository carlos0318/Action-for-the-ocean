const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const body = req.body;
        const login = await UserController.login(body);
        return login;
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const register = await UserController.register(body);
        return register;
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.put("/update", async (req, res) => {
    try {
        const body = req.body;
        const update = await UserController.updateUser(body);
        return update;
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

module.exports = router;
