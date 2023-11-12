var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit', function(req, res, next) {
  const { username, password} = req.body;
  console.log(username + ", " + password);

  res.render('dashboard');
});

module.exports = router;
