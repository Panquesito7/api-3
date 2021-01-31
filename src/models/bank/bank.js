

class Bank {
    constructor({ id, userId, balance, lastMined }) {
        this.id = id;
        this.user_id = userId;
        this.balance = balance;
        this.last_mined = lastMined;
    }
}

module.exports = Bank;