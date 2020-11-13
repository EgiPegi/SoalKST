const conn = require("./connection");
const Sequelize = require("sequelize");

const category = conn.define(
  "tb_categorys",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = category;
