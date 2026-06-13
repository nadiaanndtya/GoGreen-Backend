const Article = require("./Article");
const Category = require("./Category");

const User = require("./User");
const Laporan = require("./Laporan");
const Notification = require("./Notification");
const DukunganLaporan = require("./DukunganLaporan");

Category.hasMany(Article, {
  foreignKey: "category_id"
});

Article.belongsTo(Category, {
  foreignKey: "category_id"
});

User.hasMany(Laporan, {
  foreignKey: "id_user"
});

Laporan.belongsTo(User, {
  foreignKey: "id_user"
});

User.hasMany(Notification, {
  foreignKey: "id_user"
});

Notification.belongsTo(User, {
  foreignKey: "id_user"
});

Laporan.hasMany(Notification, {
  foreignKey: "id_laporan"
});

Notification.belongsTo(Laporan, {
  foreignKey: "id_laporan"
});

User.hasMany(DukunganLaporan, {
  foreignKey: "id_user"
});

DukunganLaporan.belongsTo(User, {
  foreignKey: "id_user"
});


Laporan.hasMany(DukunganLaporan, {
  foreignKey: "id_laporan"
});

DukunganLaporan.belongsTo(Laporan, {
  foreignKey: "id_laporan"
});


module.exports = {
  Article,
  Category,
  User,
  Laporan,
  Notification,
  DukunganLaporan
};