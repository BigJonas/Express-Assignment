var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET dashboard page. */
// why is the indentation so funky here
router.get('/', async function(req, res, next) {
    // Don't know if this is required since the exact route is in index but ill keep it
    let userData = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.render('dashboard', {userData: userData.data});
});


module.exports = router;
