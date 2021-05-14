var express = require("express");
var router = express.Router();
var mongoDB = require("../lib/mongo");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("I am at the names route");
});

router.get("/:filmName", async function (req, res, next) {
  const winner = req.query.winner;
  let filmName = null;
  if (winner == null) {
    filmName = await mongoDB.getFilmName(req.params.filmName, null);
  } else {
    filmName = await mongoDB.getFilmName(req.params.filmName, winner);
  }

  res.send(filmName);
});

router.get("/films/all", async function (req, res, next) {
  const film = await mongoDB.getFilmNames();

  res.send(film);
});

router.get("/films/winners", async function (req, res, next) {
  const filmWinners = await mongoDB.getResults();

  res.send(filmWinners);
});

router.get("/actor/:actorName", async function (req, res, next) {
  const winner = req.query.winner;

  let actorName = null;
  if (winner == null) {
    actorName = await mongoDB.getActorName(req.params.actorName, null);
  } else {
    actorName = await mongoDB.getActorName(req.params.actorName, winner);
  }

  res.send(actorName);
});

router.get("/actors/search", async function (req, res, next) {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const fullName = firstName + " " + lastName;
  const actorName = await mongoDB.getActorName(fullName);
  res.send(actorName);
});

module.exports = router;
