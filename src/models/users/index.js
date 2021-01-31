const UserDao = require('./userDao');

const userDao = new UserDao();

module.exports = {
    User: userDao
}