const express = require("express");
const router = express.Router();
const laporanController = require("../controllers/laporanController");
const verifyToken = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  searchValidation
} = require("../middleware/sanitizer");

router.get("/laporan", verifyToken, searchValidation, laporanController.getLaporan);

router.get("/laporan-saya", verifyToken, laporanController.getLaporanSaya);

router.post(
  "/laporan",
  verifyToken,
  (req, res, next) => {
    upload.single("foto")(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message
        });
      }
      next();
    });
  },
  laporanController.createLaporan
);

router.get("/laporan-terpopuler", verifyToken, laporanController.getLaporanTerpopuler);

router.get(
  "/laporan/:id",
  verifyToken,
  laporanController.getDetailLaporan
);

router.put(
  "/laporan/:id/status",
  verifyToken,
  upload.fields([
    { name: "foto_selesai", maxCount: 1 }
  ]),
  laporanController.updateStatusLaporan
);

router.delete("/laporan/:id", verifyToken, laporanController.deleteLaporan);

router.put(
  "/laporan/:id",
  verifyToken,
  upload.single("foto"),
  laporanController.updateLaporan
);

module.exports = router;