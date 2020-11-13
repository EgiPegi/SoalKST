const conn = require("./connection");
const Sequelize = require("sequelize");

const readJoin = () => {
  return new Promise(function (resolve, reject) {
    conn
      .query(
        // "SELECT JSON_OBJECT('id', tb_category.id,'category', tb_category.category,'menu', JSON_ARRAY((SELECT GROUP_CONCAT(JSON_OBJECT('id',id,'name',name,'price',price)) FROM tb_menu Where id_category = tb_category.id))) FROM tb_category"
        "SELECT tb_categorys.id as id_category, tb_categorys.category, tb_menus.id as id_menu, tb_menus.name, tb_menus.price from tb_categorys INNER JOIN tb_menus ON tb_categorys.id = tb_menus.id_category ORDER BY id_category"
      )
      .then((data) => {
        resolve(data[0]);
      })
      .catch((err) => {
        resolve(err.message);
      });
  });
};

const readJoinFiler = (id) => {
  return new Promise(function (resolve, reject) {
    conn
      .query(
        "SELECT tb_categorys.id as id_category, tb_categorys.category, tb_menus.id as id_menu, tb_menus.name, tb_menus.price from tb_categorys INNER JOIN tb_menus ON tb_categorys.id = tb_menus.id_category WHERE id_category=" +
          id +
          ""
      )
      .then((data) => {
        resolve(data[0]);
      })
      .catch((err) => {
        resolve(err.message);
      });
  });
};

module.exports = { readJoin, readJoinFiler };
