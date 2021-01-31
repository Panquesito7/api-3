const userModel = require('./schema');
const User = require('./user');

class UserDao {
    constructor(){
        
    }

    async create({username, password}){
        try {
            let res = new userModel({username, password});
            res.save();
            let user = new User({id: res._id, username: res.username, password: res.password});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserDao;