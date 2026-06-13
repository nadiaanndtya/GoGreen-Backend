require("dotenv").config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET belum diatur");
}
  
if (!process.env.JWT_EXPIRES) {
  throw new Error("JWT_EXPIRES belum diatur");
}

const app = require("./app");
const sequelize = require("./config/db");

sequelize.authenticate()
  .then(() => {

    console.log("Database berhasil terhubung");

    return sequelize.sync();

  })
  .then(() => {

    app.listen(5000, () => {
      console.log("Server berjalan di port 5000");
    });

  })
  .catch((err) => {

    console.log("Koneksi database gagal", err);

  });
