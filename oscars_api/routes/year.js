var express = require('express');
var router = express.Router();
var mongoDB = require("../lib/mongo");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Im in the year route');
});

router.get('/film/:year', async function(req, res, next) {
  
  const filmYearResults = await mongoDB.getFilmYear(req.params.year)
  
  res.send(filmYearResults);
});

router.get('/ceremony/:year', async function(req, res, next) {
  
  const ceremonyYearResults = await mongoDB.getCeremonyYear(req.params.year);
  
  res.send(ceremonyYearResults);
});

router.get('/range/:year1/:year2', async function(req, res, next) {
  
  const rangeResults =  await mongoDB.rangeOfYears(req.params.year1, req.params.year2);
  res.send(rangeResults);
});

router.get('/range', async function(req, res, next) {

  const firstYear = req.query.firstYear;
  const secondYear = req.query.secondYear;
  const rangeResults = await mongoDB.rangeOfYears(firstYear, secondYear);
  res.send(rangeResults);
})

module.exports = router;
