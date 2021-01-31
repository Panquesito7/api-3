const { bankModel } = require('./schema');
const Bank = require('./bank');

/**
 * Functionalities
 * - create Account
 * - update balance 
 * - money transfer
 */

class BankDAO {
    async createAccount({ user_id }) {
        try {
            const acc = await bankModel.create({
                user_id,
                balance: 0,
                lastMined: Date.now()
            });
            return new Bank({
                id: acc._id,
                userId: acc.user_id,
                balance: acc.balance,
                lastMined: acc.lastMined
            });
        } catch (error) {
            throw error;
        }
    }

    async addBalance({ user_id, balance }) {
        try {
            let acc = await bankModel.findById(user_id);
            // check if the last mined over 2h. 
            let upAcc = await bankModel.findByIdAndUpdate(user_id, {
                balance: acc.balance + balance,
                lastMined: Date.now()
            }, { upsert: true });

            return new Bank({
                id: upAcc._id,
                userId: user_id,
                balance: upAcc.balance,
                lastMined: upAcc.lastMined
            });
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new BankDAO();