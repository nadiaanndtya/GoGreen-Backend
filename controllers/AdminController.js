const Dukungan = require("../models/DukunganLaporan");
const { Op, fn, col, literal } = require("sequelize");
const { User, Laporan } = require("../models");

exports.getDashboardStats = async (req, res) => {
  try {

    const [
      total,
      terkirim,
      proses,
      selesai,
      dukungan,
      laporanPerMinggu,
      statusDistribusi
    ] = await Promise.all([

      Laporan.count(),

      Laporan.count({ where: { status: "terkirim" } }),

      Laporan.count({ where: { status: "proses" } }),

      Laporan.count({ where: { status: "selesai" } }),

      Dukungan.count(),

      Laporan.findAll({
        attributes: [
          [
            literal(`TO_CHAR("tanggal_laporan", 'YYYY-IW')`),
            "minggu"
          ],
          "status",
          [
            fn("COUNT", col("id_laporan")),
            "total"
          ]
        ],
        group: [
          literal(`TO_CHAR("tanggal_laporan", 'YYYY-IW')`),
          "status"
        ],
        order: [
          [literal(`TO_CHAR("tanggal_laporan", 'YYYY-IW')`), "ASC"]
        ],
        raw: true
      }),

      Laporan.findAll({
        attributes: [
          "status",
          [fn("COUNT", col("id_laporan")), "total"]
        ],
        group: ["status"],
        raw: true
      })

    ]);

    res.json({
      total_laporan: total,
      terkirim,
      proses,
      selesai,
      dukungan,
      laporan_per_minggu: laporanPerMinggu,
      status_distribusi: statusDistribusi
    });

  } catch (error) {
    console.error("ERROR DASHBOARD:", error);

    res.status(500).json({
      message: "Gagal mengambil data dashboard"
    });
  }
};

exports.getAllLaporanAdmin = async (req, res) => {
  try {

    const {
      status,
      kecamatan,
      search,
      sort = "terbaru"
    } = req.query;

    /* ======================
       FILTER
    ====================== */

    let where = {};

    if (status && status !== "semua") {
      where.status = status;
    }

    if (kecamatan && kecamatan !== "semua") {
      where.kecamatan = kecamatan;
    }

    if (search) {
      where[Op.or] = [
        { judul: { [Op.iLike]: `%${search.toLowerCase()}%` } },
        { deskripsi: { [Op.iLike]: `%${search.toLowerCase()}%` } },
        { lokasi: { [Op.iLike]: `%${search.toLowerCase()}%` } },
        { kecamatan: { [Op.iLike]: `%${search.toLowerCase()}%` } }
      ];
    }

    /* ======================
       SORT
    ====================== */

    let order = [];

    if (sort === "terbaru")
      order.push(["tanggal_laporan", "DESC"]);

    if (sort === "terlama")
      order.push(["tanggal_laporan", "ASC"]);

    const dukunganCountLiteral = literal(`(
      SELECT COUNT(*)
      FROM dukungan_laporan
      WHERE dukungan_laporan.id_laporan = laporan.id_laporan
    )`);

    if (sort === "dukungan_terbanyak")
      order.push([dukunganCountLiteral, "DESC"]);

    if (sort === "dukungan_tersedikit")
      order.push([dukunganCountLiteral, "ASC"]);

    /* ======================
       QUERY
    ====================== */

    const laporan = await Laporan.findAll({
      where,
      attributes: {
        include: [
          [
            literal(`(
              SELECT COUNT(*)
              FROM dukungan_laporan
              WHERE dukungan_laporan.id_laporan = laporan.id_laporan
            )`),
            "total_dukungan"
          ]
        ]
      },

      include: [
        {
          model: User,
          attributes: ["nama", "no_hp"]
        }
      ],

      order,

      raw: true,
      nest: true
    });

    res.json(laporan);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Gagal mengambil laporan admin"
    });
  }
};

exports.deleteLaporan = async (req, res) => {
  try {
    const { id } = req.params;

    const laporan = await Laporan.findByPk(id);

    if (!laporan) {
      return res.status(404).json({
        message: "Laporan tidak ditemukan"
      });
    }

    await Dukungan.destroy({
      where: {
        id_laporan: id
      }
    });

    await laporan.destroy();

    res.json({
      message: "Laporan berhasil dihapus"
    });

  } catch (error) {
    console.error("ERROR DELETE:", error);

    res.status(500).json({
      message: error.message
    });
  }
};