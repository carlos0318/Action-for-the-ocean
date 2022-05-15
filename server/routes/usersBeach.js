const express = require("express");
const UserBeachController = require("../controllers/UserBeachController");

const router = express.Router();

router.post("/locations", async (req, res) => {
    try {
        const body = req.body;
        const createLocation = UserBeachController.createLocation(body);
        return createLocation;
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

module.exports = router;
