const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TempatSampah = sequelize.define("tempat_sampah", {
  id_tps: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_tps: {
    type: DataTypes.STRING
  },
  lokasi: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.FLOAT
  },
  longitude: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: "tempat_sampah",  
  timestamps: false,
  freezeTableName: true
});

module.exports = TempatSampah;