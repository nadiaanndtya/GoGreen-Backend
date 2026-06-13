const { body, query } = require("express-validator");

exports.searchValidation = [
  query("search")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Search maksimal 100 karakter")
    .escape()
];

