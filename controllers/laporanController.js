const Laporan = require("../models/Laporan");
const Notification = require("../models/Notification");
const sequelize = require("../config/db");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

exports.getLaporan = async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  
  try {

    console.log("REQ USER:", req.user);

    const { search } = req.query;

    let where = {};

    if (search) {
      where[Op.or] = [
        { judul: { [Op.iLike]: `%${search}%` } },
        { deskripsi: { [Op.iLike]: `%${search}%` } },
        { lokasi: { [Op.iLike]: `%${search}%` } },
        { kecamatan: { [Op.iLike]: `%${search}%` } }
      ];
    }

    const laporan = await Laporan.findAll({
      where,
      raw: true,

      attributes: {
        exclude: ["createdAt", "updatedAt"], 
        include: [

          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
            )`),
            "total_dukungan"
          ],

          [
            sequelize.literal(`EXISTS(
              SELECT 1
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
              AND dukungan_laporan.id_user = ${Number(req.user?.id || 0)}
            )`),
            "sudah_dukung"
          ]
        ]
      },

      order: [["tanggal_laporan", "DESC"]]
    });

    res.json(laporan);

  } catch (error) {
    console.error("ERROR GET LAPORAN:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

exports.getLaporanSaya = async (req, res) => {
  try {

    const laporan = await Laporan.findAll({
      raw: true,

      where: {
        id_user: req.user.id
      },

      attributes: {
        exclude: ["createdAt", "updatedAt"],
        include: [

          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
            )`),
            "total_dukungan"
          ],

          [
            sequelize.literal(`EXISTS(
              SELECT 1
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
              AND dukungan_laporan.id_user = ${Number(req.user?.id || 0)}
            )`),
            "sudah_dukung"
          ]
        ]
      },

      order: [["tanggal_laporan", "DESC"]]
    });

    res.json(laporan);

  } catch (error) {
    console.error("ERROR GET LAPORAN SAYA:", error);

    res.status(500).json({
      message: error.message
    });
  }
};


exports.createLaporan = async (req, res) => {
  try {

    if (!req.user?.id) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const {
      judul,
      deskripsi,
      lokasi,
      kecamatan
    } = req.body || {};

    if (
      !judul ||
      !deskripsi ||
      !lokasi ||
      !kecamatan
    ) {
      return res.status(400).json({
        message: "Semua field wajib diisi"
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Foto wajib diupload"
      });
    }

    const lat = parseFloat(req.body.latitude);
    const lng = parseFloat(req.body.longitude);

    const laporan = await Laporan.create({
      id_user: req.user.id,
      judul: req.body.judul,
      deskripsi: req.body.deskripsi,
      foto: req.file ? req.file.path : null,
      lokasi: req.body.lokasi,
      kecamatan: req.body.kecamatan,
      latitude: !isNaN(lat) ? lat : null,
      longitude: !isNaN(lng) ? lng : null,
      status: "terkirim",
    });

    await Notification.create({

      id_user: req.user.id,

      id_laporan: laporan.id_laporan,

      type: "laporan_terkirim",

      title: "Laporan Berhasil Dikirim",

      message:
        "Laporan Anda berhasil dikirim. Klik untuk melihat perkembangan laporan."

    });

    res.json({
      message: "Laporan berhasil dibuat",
      data: laporan
    });

  } catch (error) {
    console.error("ERROR CREATE LAPORAN:", error);
    console.error("SQL:", error?.parent?.sqlMessage);

    res.status(500).json({
      message: error.message,
      detail: error?.parent?.sqlMessage
    });
  }
};

exports.getLaporanTerpopuler = async (req, res) => {
  try {

    const laporan = await Laporan.findAll({
      raw: true,

      attributes: {
        exclude: ["createdAt", "updatedAt"],
        include: [

          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
            )`),
            "total_dukungan"
          ],

          [
            sequelize.literal(`EXISTS(
              SELECT 1
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
              AND dukungan_laporan.id_user = ${Number(req.user?.id || 0)}
            )`),
            "sudah_dukung"
          ]
        ]
      },

      order: [[sequelize.literal("total_dukungan"), "DESC"]]
    });

    res.json(laporan);

  } catch (error) {
    console.error("ERROR LAPORAN TERPOPULER:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

exports.getDetailLaporan = async (req, res) => {
  try {

    const { id } = req.params;

    const laporan = await Laporan.findOne({
      raw: true,

      where: {
        id_laporan: id
      },

      attributes: {
        exclude: ["createdAt", "updatedAt"],
        include: [

          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
            )`),
            "total_dukungan"
          ],

          [
            sequelize.literal(`EXISTS(
              SELECT 1
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
              AND dukungan_laporan.id_user = ${Number(req.user?.id || 0)}
            )`),
            "sudah_dukung"
          ]
        ]
      }
    });

    if (!laporan) {
      return res.status(404).json({
        message: "Laporan tidak ditemukan"
      });
    }

    res.json(laporan);

  } catch (error) {
    console.error("ERROR DETAIL LAPORAN:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateStatusLaporan = async (req, res) => {
  try {

    const { id } = req.params;
    const { status } = req.body;

    const laporan = await Laporan.findByPk(id);

    if (!laporan) {
      return res.status(404).json({
        message: "Laporan tidak ditemukan"
      });
    }

    const allowedStatus = ["terkirim", "proses", "selesai"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        message: "Status tidak valid"
      });
    }

    let updateData = {
      status
    };

    if (status === "selesai") {

      const fotoSelesai =
        req.files?.foto_selesai?.[0]?.path;

      if (!fotoSelesai) {
        return res.status(400).json({
          message: "Foto bukti selesai wajib diupload"
        });
      }

      updateData.foto_selesai = fotoSelesai;
      updateData.tanggal_selesai = new Date();
    }

    await laporan.update(updateData);

    if(status === "proses"){

      await Notification.create({

        id_user: laporan.id_user,

        id_laporan: laporan.id_laporan,

        type: "laporan_diproses",

        title: "Laporan Diproses",

        message:
          "Laporan Anda saat ini sedang diproses petugas."

      });

    }

    if(status === "selesai"){

      await Notification.create({

        id_user: laporan.id_user,

        id_laporan: laporan.id_laporan,

        type: "laporan_selesai",

        title: "Laporan Selesai",

        message:
          "Laporan Anda telah selesai ditangani."

      });

    }

    res.json({
      message: "Status laporan berhasil diperbarui",
      data: laporan
    });

  } catch (error) {
    console.error("ERROR UPDATE STATUS:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

exports.deleteLaporan = async (req, res) => {
  try {

    const { id } = req.params;

    console.log("ID PARAM:", id);
    console.log("USER LOGIN:", req.user);

    const laporan = await Laporan.findOne({
      where: { id_laporan: id }
    });

    if (!laporan) {
      console.log("❌ LAPORAN TIDAK DITEMUKAN");
      return res.status(404).json({
        message: "Laporan tidak ditemukan"
      });
    }

    console.log("OWNER DB:", laporan.id_user);
    console.log("STATUS DB:", laporan.status);

    if (Number(laporan.id_user) !== Number(req.user.id)) {
      console.log("❌ BUKAN OWNER");
      return res.status(403).json({
        message: "Anda tidak punya akses"
      });
    }

    if (laporan.status !== "terkirim") {
      console.log("❌ STATUS BUKAN TERKIRIM");
      return res.status(400).json({
        message: "Hanya laporan terkirim yang bisa dihapus"
      });
    }

    await sequelize.query(
      'DELETE FROM dukungan_laporan WHERE id_laporan = :id',
      {
        replacements: { id }
      }
    );

    const deleted = await Laporan.destroy({
      where: { id_laporan: id }
    });

    console.log("HASIL DELETE:", deleted);

    if (deleted === 0) {
      return res.status(500).json({
        message: "Delete gagal, data tidak terhapus"
      });
    }

    res.json({
      message: "Laporan berhasil dihapus"
    });

  } catch (error) {
    console.error("🔥 ERROR FULL:");
    console.error(error);
    console.error("PARENT:", error?.parent);
    console.error("SQL MESSAGE:", error?.parent?.sqlMessage);

    res.status(500).json({
      message: error.message,
      detail: error?.parent?.sqlMessage
    });
  }
};

exports.updateLaporan = async (req, res) => {
  try {
    const { id } = req.params;

    const laporan = await Laporan.findOne({
      where: { id_laporan: id }
    });

    if (!laporan) {
      return res.status(404).json({
        message: "Laporan tidak ditemukan"
      });
    }

    if (Number(laporan.id_user) !== Number(req.user.id)) {
      return res.status(403).json({
        message: "Anda tidak punya akses"
      });
    }

    if (laporan.status !== "terkirim") {
      return res.status(400).json({
        message: "Hanya laporan terkirim yang bisa diedit"
      });
    }

    let updateData = {
      judul: req.body.judul,
      deskripsi: req.body.deskripsi,
      lokasi: req.body.lokasi,
      kecamatan: req.body.kecamatan,
    };

    const lat = parseFloat(req.body.latitude);
    const lng = parseFloat(req.body.longitude);

    updateData.latitude = !isNaN(lat) ? lat : null;
    updateData.longitude = !isNaN(lng) ? lng : null;
    
    if (req.file) {
      updateData.foto = req.file.path;
    }

    await laporan.update(updateData);

    res.json({
      message: "Laporan berhasil diperbarui",
      data: laporan
    });

  } catch (error) {
    console.error("ERROR UPDATE LAPORAN:", error);

    res.status(500).json({
      message: error.message
    });
  }
};
