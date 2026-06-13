const express = require("express");
const cors = require("cors");

const laporanRoutes = require("./routes/laporanRoutes");
const userRoutes = require("./routes/userRoutes");
const tempatSampahRoutes = require("./routes/TempatSampahRoutes");
const dukunganRoutes = require("./routes/DukunganRoutes");
const adminRoutes = require("./routes/AdminRoutes");
const articleRoutes = require("./routes/articleRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
const notificationRoutes = require("./routes/NotificationRoutes");

require("./models/Relasi");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Sistem Pelaporan Sampah");
});

app.use("/api", laporanRoutes);
app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", tempatSampahRoutes);
app.use("/api", dukunganRoutes);
app.use("/api", articleRoutes);
app.use("/api", categoryRoutes);
app.use("/api", notificationRoutes);
module.exports = app;