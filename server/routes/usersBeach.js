const express = require("express");
const UserBeachController = require("../controllers/UserBeachController");

const router = express.Router();

router.post("/locations", async (req, res) => {
    try {
        const body = req.body;
        const getLatestLocations = UserBeachController.getLatestLocations(body);
        return getLatestLocations;
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.post("/rating", async (req, res) => {
    try {
        const body = req.body;
        const getRating = UserBeachController.getRating(body);
        return getRating;
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

module.exports = router;
