const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./oauth')


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    try {
        let user = await User.findOne({username: username});
        if(!user){
            return done(null, false);
        }

    } catch (error) {
        return done(error);
    }
}))