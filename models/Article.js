const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const slugify = require("slugify");

const Article = sequelize.define("articles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  thumbnail: {
    type: DataTypes.STRING
  },
  slug: {
    type: DataTypes.STRING,
    unique: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  tableName: "articles",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  freezeTableName: true
});

Article.beforeCreate(async (article) => {
  let baseSlug = slugify(article.title, {
    lower: true,
    strict: true
  });

  let slug = baseSlug;
  let count = 1;

  while (await Article.findOne({ where: { slug } })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  article.slug = slug;
});

module.exports = Article;