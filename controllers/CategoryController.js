const { Category } = require("../models/Relasi");

// =============================
// GET ALL CATEGORY
// =============================
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);

  } catch (error) {
    console.error("ERROR GET CATEGORY:", error);
    res.status(500).json({ message: error.message });
  }
};


// =============================
// CREATE CATEGORY
// =============================
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name
    });

    res.json({
      message: "Kategori berhasil dibuat",
      data: category
    });

  } catch (error) {
    console.error("ERROR CREATE CATEGORY:", error);
    res.status(500).json({ message: error.message });
  }
};