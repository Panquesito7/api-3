const router = require('express').Router();
const { login, signup } = require('./controller');
const passport = require('passport');

router.route('/login')
    .post(passport.authenticate('local', { session: false }), login)

router.route('/signup')
    .post(signup)


module.exports = router;