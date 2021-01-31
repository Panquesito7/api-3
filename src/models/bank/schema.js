const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true,
    },
    lastMined: {
        type: Date,
    }
});

const bankModel = mongoose.model('bank', bankSchema);

module.exports = {
    bankSchema,
    bankModel
}