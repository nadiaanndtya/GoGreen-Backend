const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("../config/db");

const DEBUG = process.env.NODE_ENV === "development";

exports.registerUser = async (req, res) => {

  const { nama, email, password, alamat, no_hp } = req.body;

  try {

    const existingUser = await User.findOne({
      where: { email: email }
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email sudah terdaftar"
      });
    }

    const user = await User.create({
      nama: nama,
      email: email,
      password: password, 
      alamat: alamat,
      no_hp: no_hp,
      role: "warga"
    });

    res.status(201).json({
      message: "Registrasi berhasil",
      user: {
        id: user.id_user,
        nama: user.nama,
        email: user.email
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Terjadi kesalahan server"
    });

  }

};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email dan password wajib diisi"
    });
  }

  try {
    if (DEBUG) {
      console.log("EMAIL INPUT:", email);
      console.log("MODEL TABLE:", User.getTableName());
    }

    const user = await User.findOne({
      where: { email },
      raw: true
    });

    if (!user) {
      return res.status(401).json({
        message: "Email atau password salah"
      });
    }

    if (DEBUG) {
      console.log("PASSWORD DB:", user.password);
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Email atau password salah"
      });
    }

    if (user.role !== "warga" && user.role !== "admin") {
      return res.status(403).json({
        message: "Role tidak dikenali"
      });
    }

    const token = jwt.sign(
      {
        id: user.id_user,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES
      }
    );

    res.json({
      message: "Login berhasil",
      token: token,
      user: {
        id: user.id_user,
        nama: user.nama,
        email: user.email,
        alamat: user.alamat,
        no_hp: user.no_hp,
        role: user.role
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Terjadi kesalahan server"
    });

  }

};

exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    // ambil user dari token
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan"
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password lama salah"
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        message: "Password minimal 8 karakter"
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({
      message: "Password berhasil diubah"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan server"
    });
  }
};