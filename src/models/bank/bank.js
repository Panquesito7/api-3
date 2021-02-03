const { bankModel } = require('./schema');

class Bank {
    constructor({ id, userId, balance, lastMined }) {
        this.id = id;
        this.user_id = userId;
        this.balance = balance;
        this.last_mined = lastMined;
    }
    async updateBalance(amount, operation) {
        let newBalance = null;
        if(operation === "credit"){
            newBalance = this.balance + amount;
        }
        if(operation === "debit"){
            if(amount > this.balance){
                throw "Insufficient balance for transaction";
            }
            newBalance = this.balance - amount;
        }

        try {
            let res = await bankModel.findByIdAndUpdate(this.user_id, {balance: newBalance});
            this.balance = newBalance;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Bank;