const authRouter = require('./router');
const { User, userSchema } = require('./model/user')

module.exports = {
    authRouter,
    User,
    userSchema
}