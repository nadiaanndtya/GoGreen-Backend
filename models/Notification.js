const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Notification = sequelize.define("notification", {

  id_notification: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  id_laporan: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  type: {
    type: DataTypes.ENUM(
      "laporan_terkirim",
      "laporan_diproses",
      "laporan_selesai",
      "laporan_didukung"
    ),
    allowNull: false
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  is_read: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}, {
  tableName: "notifications",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false,
  freezeTableName: true
});

module.exports = Notification;