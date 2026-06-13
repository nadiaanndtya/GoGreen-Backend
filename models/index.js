const User = require("./User");
const Laporan = require("./Laporan");

User.hasMany(Laporan, {
  foreignKey: "id_user"
});

Laporan.belongsTo(User, {
  foreignKey: "id_user"
});

module.exports = {
  User,
  Laporan
};