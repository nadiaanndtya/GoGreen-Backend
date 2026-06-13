const Dukungan = require("../models/DukunganLaporan");
const Laporan = require("../models/Laporan");
const User = require("../models/User");
const Notification = require("../models/Notification");

exports.toggleDukungan = async (req, res) => {
  try {
    const { id_laporan } = req.body;
    const id_user = req.user.id;

    const existing = await Dukungan.findOne({
      where: { id_laporan, id_user },
    });

    // jika sudah dukung → hapus
    if (existing) {
      await existing.destroy();

      return res.json({
        status: "cancel",
        message: "Dukungan dibatalkan",
      });
    }

    // jika belum → tambah
    await Dukungan.create({
      id_laporan,
      id_user,
    });

    // ======================
    // NOTIFIKASI DUKUNGAN
    // ======================

    const laporan = await Laporan.findByPk(id_laporan);

    const pendukung = await User.findByPk(id_user);

    if (
      laporan &&
      laporan.id_user !== id_user
    ) {

      const existingNotif =
        await Notification.findOne({
          where: {
            id_user: laporan.id_user,
            id_laporan,
            type: "laporan_didukung"
          }
        });

      if (existingNotif) {

        const jumlahDukungan =
          await Dukungan.count({
            where: { id_laporan }
          });

        const wargaLain =
          jumlahDukungan - 1;

        await existingNotif.update({
          message:
            wargaLain > 0
              ? `${pendukung.nama} dan ${wargaLain} warga lainnya mendukung laporan Anda.`
              : `${pendukung.nama} mendukung laporan Anda.`,
          is_read: false
        });

      } else {

        await Notification.create({
          id_user: laporan.id_user,
          id_laporan,
          title: "Laporan Didukung Warga",
          message: `${pendukung.nama} mendukung laporan Anda.`,
          type: "laporan_didukung",
          is_read: false
        });

      }

    }

    return res.json({
      status: "dukung",
      message: "Laporan berhasil didukung",
    });
  } catch (error) {
    console.error("ERROR TOGGLE DUKUNGAN:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};