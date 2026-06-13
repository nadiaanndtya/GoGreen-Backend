const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Laporan = sequelize.define("laporan", {
  id_laporan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER
  },
  judul: {
    type: DataTypes.STRING
  },
  deskripsi: {
    type: DataTypes.TEXT
  },
  foto: {                  
    type: DataTypes.STRING
  },
  foto_selesai: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lokasi: {
    type: DataTypes.STRING
  },
  kecamatan: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM(
      "terkirim",
      "proses",
      "selesai"
    ),
    defaultValue: "terkirim"
  }
  
  }, {
  tableName: "laporan",   
  timestamps: true,
  createdAt: "tanggal_laporan",
  updatedAt: "tanggal_update",
  freezeTableName: true
});

module.exports = Laporan;

