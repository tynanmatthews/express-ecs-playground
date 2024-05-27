var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next){
  const name = req.params.name;
  console.log('request', req)
  res.send('Hello ' + req);
});

module.exports = router;
