require("dotenv").config();

const sequelize = require("../config/db");
const app = require("../app");

sequelize.authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database error:", err);
  });

module.exports = app;