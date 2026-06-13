const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DukunganLaporan = sequelize.define("dukungan_laporan", {
  id_dukungan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_laporan: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    tableName: "dukungan_laporan",  
    timestamps: false,

    indexes: [
        {
        unique: true,
        fields: ["id_user", "id_laporan"]
        }
    ]
});

module.exports = DukunganLaporan;