console.log("START DB");

try {
  console.log("PG PATH =", require.resolve("pg"));
} catch (err) {
  console.error("PG NOT FOUND", err);
}

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },

  define: {
    schema: "public",       
    freezeTableName: true     
  },

  schema: "public",

  logging: process.env.NODE_ENV === "development" ? console.log : false
});

module.exports = sequelize;