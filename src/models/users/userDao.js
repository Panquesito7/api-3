const { userModel } = require('./schema');
const User = require('./user');
const bcrypt = require('bcrypt');


class UserDao {
    constructor() {

    }

    async create({ username, password }) {
        try {
            let res = await userModel.findOne({username});
            if(res){
                throw "username already exists"
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            let nUser = await userModel.create({username, password: hashedPassword});

            let user = new User({
                id: nUser._id,
                username: nUser.username,
                password: nUser.password
            });

            return user;

        } catch (error) {
            throw error;
        }
    }

    async findOne(param) {
        try {
            let res = await userModel.findOne(param);
            if (!res) {
                throw "No such entry"
            }

            let user = new User({ id: res._id, username: res.username, password: res.password });

            return user;

        } catch (error) {
            throw error
        }
    }
    async findById(id){
        try {
            let res = await userModel.findById(id);
            return new User({id: res._id, username: res.username, password: res.password});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserDao;