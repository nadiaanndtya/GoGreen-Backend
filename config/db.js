console.log("START DB");

try {
  const pg = require("pg");
  console.log("PG LOADED", typeof pg);

  const { Sequelize } = require("sequelize");

  const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectModule: pg,

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });

  module.exports = sequelize;

} catch (err) {
  console.error("DB INIT ERROR");
  console.error(err);
  throw err;
}