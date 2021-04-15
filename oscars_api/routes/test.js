var express = require("express");
var router = express.Router();
var mongoDB = require("../lib/mongo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("I am at the test");
});

module.exports = router;
