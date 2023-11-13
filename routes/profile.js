var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET profile page. */
// why is the indentation so funky here
router.get('/', async function(req, res, next) {
    let profileData = await axios.get('https://jsonplaceholder.typicode.com/users');
    // let profilePicture = await axios.get('https://xsgames.co/randomusers/avatar.php?g=male');
    // console.log(profileData.data[0]);

    res.render('profile', {profileData: profileData.data[0]});
});


module.exports = router;
