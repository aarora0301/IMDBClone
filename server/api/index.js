const express = require('express');

const router = express.Router();

// any new resource api should imported here and then registered to
// router with proper api endpoint prefix (e.g /user user.route, /items items.route etc.)
const user = require('./user');
const cast=require('./person');
const movie=require('./movie')


router.use('/users', user.route);
router.use('/cast', cast.route)
router.use('/movie', movie.route);


module.exports = router;
