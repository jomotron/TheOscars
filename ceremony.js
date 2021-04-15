var express = require('express');
var router = express.Router();
var mongoDB = require("../lib/mongo");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Im in the ceremony number route');
});


router.get('/:ceremony', async function(req, res, next) {
  
  const ceremonyNumber = await mongoDB.getCeremonyNumber(req.params.ceremony)
  
  res.send(ceremonyNumber);
});



module.exports = router;