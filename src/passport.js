const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./models/users');
const { ExtractJwt } = require('passport-jwt');
const JWTStrategy = require('passport-jwt').Strategy;


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    try {
        let user = await User.findOne({ username: username });
        let isSame = await user.verifyPassword(password);
        if (!isSame) {
            return done(null, false);
        }

        return done(null, true);

    } catch (error) {
        return done(error);
    }
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, async (payload, done) => {
    let { id } = payload;
    try {
        let user = User.findById(id);
        done(user, true);
    } catch (error) {
        return done(error);
    }
}))