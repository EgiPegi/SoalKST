const express = require("express");
const app = express();
const conn = require("./connection");
const controller = require("./controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/menu", controller.readMenu);
app.get("/find/:id", cekParam, controller.readFilerMenu);
app.post("/menu", controller.postMenu);
app.patch("/menu", controller.updateMenu);
app.delete("/menu/:id", cekParamDell, controller.dellMenu);

function cekParam(req, res, next) {
  const id = req.params.id;
  if (id < 99999) {
    next();
  } else {
    res.status(400).send("Cannot find any menu with category ID 999999!");
  }
}
function cekParamDell(req, res, next) {
  const id = req.params.id;
  if (id < 99999) {
    if (id === 4) {
      res.status(201).send("Return 201 no content.");
    } else {
      next();
    }
  } else {
    res.status(400).send("Cannot find any menu with category ID 999999!");
  }
}

app.get("/", function (req, res) {
  if (conn) {
    res.send("Create by PEGI HASYIM ROSIDI");
  } else {
    res.send("Not connected");
  }
});

// ? listen port
const port = process.env.PORT || 3000;
app.listen(port);
