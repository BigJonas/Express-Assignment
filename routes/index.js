var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit', async function(req, res, next) {
  const { username, password} = req.body;
  console.log(username + ", " + password);

  let userData = await axios.get('https://jsonplaceholder.typicode.com/users');

  res.render('dashboard', {userData: userData.data});
});

// router.get('/test', function(req, res, next) {
//   res.render('test', {test: "This is a test"})
// });

module.exports = router;
