const { Sequelize } = require("sequelize");

console.log("DATABASE_URL =", process.env.DATABASE_URL);

try {
  console.log("PG MODULE =", require.resolve("pg"));
} catch (err) {
  console.error("PG NOT FOUND", err);
}

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