const { readJoin, readJoinFiler } = require("./modelsQuery");
const menu = require("./modelsMenu");
const category = require("./modelsCategory");
const formatReturn = require("./helper");
const modelsQuery = require("./modelsQuery");

const readMenu = (req, res, next) => {
  readJoin()
    .then((data) => {
      res.status(200).send(formatReturn(data));
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};

const readFilerMenu = (req, res, next) => {
  readJoinFiler(req.params.id)
    .then((data) => {
      res.status(200).send(formatReturn(data));
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};

const postMenu = (req, res, next) => {
  let dataCategory = { category: req.body.category.name };
  category
    .findOne({
      where: dataCategory,
    })
    .then((data) => {
      let dataMenu = {
        id_category: data.id,
        name: req.body.name,
        price: req.body.price,
      };
      menu
        .create(dataMenu)
        .then((data) => {
          res.status(200).send("Menu has been added.");
        })
        .catch((err) => {
          res
            .status(404)
            .send("Return 404 bad request with the reason why it’s rejected.");
        });
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const updateMenu = (req, res, next) => {
  let data = {
    name: req.body.name,
    price: req.body.price,
  };
  let condition = { id: req.body.id };
  menu
    .update(data, {
      where: condition,
    })
    .then(() => {
      res.send("Menu has been changed.");
    })
    .catch((err) => {
      res
        .status(400)
        .send("Return 404 bad request with the reason why it’s rejected");
    });
};

const dellMenu = (req, res, next) => {
  menu
    .destroy({
      where: { id: req.params.id },
    })
    .then(() => {
      res.status(200).send("Menu has been removed.");
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
};

module.exports = { readMenu, readFilerMenu, postMenu, updateMenu, dellMenu };
