const { Article, Category } = require("../models/Relasi");

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: {
        model: Category,
        attributes: ["id", "name"]
      },
      order: [["created_at", "DESC"]]
    });

    res.json(articles);

  } catch (error) {
    console.error("ERROR GET ARTICLES:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.getDetailArticle = async (req, res) => {
  try {
    const { slug } = req.params;

    const article = await Article.findOne({
      where: { slug },
      include: {
        model: Category,
        attributes: ["id", "name"]
      }
    });

    if (!article) {
      return res.status(404).json({
        message: "Artikel tidak ditemukan"
      });
    }

    res.json(article);

  } catch (error) {
    console.error("ERROR DETAIL ARTICLE:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.createArticle = async (req, res) => {
  try {

    const article = await Article.create({
      title: req.body.title,
      content: req.body.content,
      category_id: req.body.category_id,
      thumbnail: req.file ? req.file.path : null
    });

    res.json({
      message: "Artikel berhasil dibuat",
      data: article
    });

  } catch (error) {
    console.error("ERROR CREATE ARTICLE:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({
        message: "Artikel tidak ditemukan"
      });
    }

    let updateData = {
      title: req.body.title,
      content: req.body.content,
      category_id: req.body.category_id
    };

    if (req.file) {
      updateData.thumbnail = req.file.path;
    }

    await article.update(updateData);

    res.json({
      message: "Artikel berhasil diperbarui",
      data: article
    });

  } catch (error) {
    console.error("ERROR UPDATE ARTICLE:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({
        message: "Artikel tidak ditemukan"
      });
    }

    await article.destroy();

    res.json({
      message: "Artikel berhasil dihapus"
    });

  } catch (error) {
    console.error("ERROR DELETE ARTICLE:", error);
    res.status(500).json({ message: error.message });
  }
};