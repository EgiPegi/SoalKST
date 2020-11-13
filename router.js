const router = require("express").Router();
const control = require("./controller");

router.get("/read", control.readMenu);

module.exports = router;
