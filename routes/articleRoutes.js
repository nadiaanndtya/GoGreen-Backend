const express = require("express");
const router = express.Router();

const articleController = require("../controllers/ArticleController");
const upload = require("../middleware/upload"); // multer kamu
const verifyToken = require("../middleware/auth");

router.get("/articles", articleController.getArticles);
router.get("/articles/:slug", articleController.getDetailArticle);

router.post(
  "/admin/articles",
  verifyToken,
  upload.single("thumbnail"),
  articleController.createArticle
);

router.put(
  "/admin/articles/:id",
  verifyToken,
  upload.single("thumbnail"),
  articleController.updateArticle
);

router.delete(
  "/admin/articles/:id",
  verifyToken,
  articleController.deleteArticle
);

module.exports = router;