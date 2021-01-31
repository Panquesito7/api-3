const jwt = require('jsonwebtoken');
const { User } = require('../models/users')

const login = async (req, res) => {
    let user = req.user;
    try {
        let token = jwt.sign({ id: user.id }, 'secret');

        return res.status(200).json({
            token: token,
            username: user.username
        });

    } catch (error) {
        return res.status(404).send(error);
    }
}

const signup = async (req, res) => {
    let { username, password } = req.body;

    try {
        let user = await User.create({ username, password });

        let token = jwt.sign({ id: user.id }, 'secret');

        return res.status(201).json({
            token,
            username: user.username
        })
    } catch (error) {
        return res.status(404).send(error);
    }
}

module.exports = {
    login,
    signup
}