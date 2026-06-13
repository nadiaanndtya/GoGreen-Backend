const { body, validationResult } = require("express-validator");

exports.validateRegister = [
  body("nama")
    .notEmpty()
    .withMessage("Nama wajib diisi"),

  body("email")
    .notEmpty()
    .withMessage("Email wajib diisi")
    .isEmail()
    .withMessage("Format email tidak valid"),

  body("password")
    .notEmpty()
    .withMessage("Password wajib diisi")
    .isLength({ min: 8 })
    .withMessage("Password minimal 8 karakter"),

  body("alamat")
    .notEmpty()
    .withMessage("Alamat wajib diisi"),

  body("no_hp")
    .notEmpty()
    .withMessage("Nomor HP wajib diisi")
    .isLength({ min: 10, max: 15 })
    .withMessage("Nomor HP tidak valid"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    next();
  },
];

