const conn = require("./connection");
const Sequelize = require("sequelize");

const menu = conn.define(
  "tb_menus",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    id_category: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = menu;
