var express = require("express");
var router = express.Router();
var mongoDB = require("../lib/mongo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("I am at the search");
});

router.get("/categories", async function (req, res, next) {
  const categories = await mongoDB.getCategories();

  res.send(categories);
});

router.get("/categories/:categoryType", async function (req, res, next) {
  const categoryResult = await mongoDB.getCategory(req.params.categoryType);
  res.send(categoryResult);
});

router.get(
  "/categories/:categoryType/winner/:year",
  async function (req, res, next) {
    const categoryResult = await mongoDB.getCategoryWinner(
      req.params.categoryType,
      req.params.year
    );
    res.send(categoryResult);
  }
);

router.get("/category", async function (req, res, next) {
  const category = req.query.category;
  const categoryResult = await mongoDB.getCategory(category);

  res.send(categoryResult);
});
module.exports = router;
