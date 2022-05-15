const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };
        const login = await UserController.login(userData);
        return res.status(200).json({
            message:login
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.post("/register", async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country
        };
        const register = await UserController.register(userData);
        return res.status(200).json({
            message: register
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post("/update" , async (req , res) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };
        const userInfo = await UserController.getUserData(userData);
        return res.status(200).json({
            message: userInfo
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.put("/update", async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country
        };
        const update = await UserController.updateUser(userData);
        return res.status(200).json({
            message: update
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

module.exports = router;
