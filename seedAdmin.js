require("dotenv").config();

const sequelize = require("./config/db");
const User = require("./models/User");

(async () => {
  try {

    await sequelize.authenticate();

    await User.create({
      nama: "Admin Dinas",
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin"
    });

    console.log("Admin berhasil dibuat");

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
})();