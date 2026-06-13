const express = require("express");
const router = express.Router();
const dukunganController = require("../controllers/DukunganController");
const verifyToken = require("../middleware/auth");

router.post("/dukungan", verifyToken, dukunganController.toggleDukungan);

module.exports = router;