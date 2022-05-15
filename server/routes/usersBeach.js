const express = require("express");
const UserBeachController = require("../controllers/UserBeachController");

const router = express.Router();

router.post("/locations", async (req, res) => {
    try {
        const userData = {
            userId: req.body.userId,
            beachId: req.body.beachId,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            rating: req.body.rating
        };
        const createLocation = UserBeachController.createLocation(userData);
        return res.status(200).json({
            message: createLocation
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

module.exports = router;
