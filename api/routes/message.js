var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/', function(req, res, next) {
  console.log(req);
  res.json({toto: 'titi'});
});

module.exports = router;