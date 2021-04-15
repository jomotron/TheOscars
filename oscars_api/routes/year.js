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



module.exports = router;
