const { Bank } = require('../models/bank');

const mine = async (req, res) => {
    if (req.body.channel_name !== "bot-cmds") {
        return res.send("> :bow: sorry this command only works in <#C01LB9BKRB8|bot-cmds>");
    }
    return res.send("Currently Under development")
}

module.exports = {
    mine
}