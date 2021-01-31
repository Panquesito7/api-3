

class Bank {
    constructor(userId, balance, lastMined) {
        this.user_id = userId;
        this.balance = balance;
        this.last_mined = lastMined;
    }
}

module.exports = Bank;