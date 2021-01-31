const bcrypt = require('bcrypt');


class User {
    constructor({id, username, password}){
        this.id = id;
        this.username = username;
        this.password = password;

    }

    async verifyPassword(password){
        try {
            let compare = await bcrypt.compare(password, this.password);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = User;