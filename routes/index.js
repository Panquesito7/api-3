const router = require('express').Router();

// importing routes //

// auth route
const authRoute = require('./auth');
router.use('/auth', authRoute);

// event route
const eventRoute = require('./events');
router.use('/event', eventRoute);

// team route
const teamRoute = require('./team');
router.use('/team', teamRoute);

// opensource route
const osRoute = require('./opensource');
router.use('/os', osRoute);


module.exports = router