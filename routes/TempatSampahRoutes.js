const express = require("express");
const router = express.Router();
const tempatSampahController = require("../controllers/tempatSampahController");
const verifyToken = require("../middleware/auth");

router.get("/tempat_sampah",  verifyToken, tempatSampahController.getTempatSampah);

module.exports = router;