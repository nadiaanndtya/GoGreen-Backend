require("dotenv").config();
const path = require("path");

const cloudinary = require("./config/cloudinary");

const Laporan = require("./models/Laporan");
const Article = require("./models/Article");

async function migrate() {

  try {

    console.log("=== MIGRASI LAPORAN ===");

    const laporanList = await Laporan.findAll();

    for (const laporan of laporanList) {

      if (
        laporan.foto &&
        !laporan.foto.startsWith("http")
      ) {

        const filePath = path.join(
          __dirname,
          "uploads",
          laporan.foto
        );

        try {

          const result =
            await cloudinary.uploader.upload(
              filePath,
              {
                folder: "laporan"
              }
            );

          await laporan.update({
            foto: result.secure_url
          });

          console.log(
            `✓ Laporan ${laporan.id_laporan}`
          );

        } catch (err) {

          console.log(
            `✗ Gagal upload laporan ${laporan.id_laporan}`
          );

          console.log(err.message);
        }
      }
    }

    console.log("=== MIGRASI FOTO SELESAI ===");

    for (const laporan of laporanList) {

      if (
        laporan.foto_selesai &&
        !laporan.foto_selesai.startsWith("http")
      ) {

        const filePath = path.join(
          __dirname,
          "uploads",
          laporan.foto_selesai
        );

        try {

          const result =
            await cloudinary.uploader.upload(
              filePath,
              {
                folder: "laporan-selesai"
              }
            );

          await laporan.update({
            foto_selesai: result.secure_url
          });

          console.log(
            `✓ Foto selesai ${laporan.id_laporan}`
          );

        } catch (err) {

          console.log(
            `✗ Gagal foto selesai ${laporan.id_laporan}`
          );

          console.log(err.message);
        }
      }
    }

    console.log("=== MIGRASI ARTIKEL ===");

    const articles = await Article.findAll();

    for (const article of articles) {

      if (
        article.thumbnail &&
        !article.thumbnail.startsWith("http")
      ) {

        const filePath = path.join(
          __dirname,
          "uploads",
          article.thumbnail
        );

        try {

          const result =
            await cloudinary.uploader.upload(
              filePath,
              {
                folder: "artikel"
              }
            );

          await article.update({
            thumbnail: result.secure_url
          });

          console.log(
            `✓ Artikel ${article.id}`
          );

        } catch (err) {

          console.log(
            `✗ Gagal artikel ${article.id}`
          );

          console.log(err.message);
        }
      }
    }

    console.log("=== SELESAI ===");

  } catch (err) {

    console.error(err);

  } finally {

    process.exit();

  }
}

migrate();