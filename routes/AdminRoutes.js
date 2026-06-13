const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");
const adminController = require("../controllers/AdminController");

router.get(
  "/dashboard",
  verifyToken,
  isAdmin,
  adminController.getDashboardStats
);

router.get(
  "/laporan",
  verifyToken,
  isAdmin,
  adminController.getAllLaporanAdmin
);

router.delete(
  "/laporan/:id",
  verifyToken,
  isAdmin,
  adminController.deleteLaporan
);

module.exports = router;