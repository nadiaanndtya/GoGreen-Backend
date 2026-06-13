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