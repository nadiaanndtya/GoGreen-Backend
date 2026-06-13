const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/CategoryController");
const verifyToken = require("../middleware/auth");

router.get("/categories", categoryController.getCategories);

router.post(
  "/admin/categories",
  verifyToken,
  categoryController.createCategory
);

module.exports = router;