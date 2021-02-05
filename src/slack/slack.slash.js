const { Bank } = require('../models/bank');
const slack = require('slack');
const config = require('../config');

const mine = async (req, res) => {
    if (req.body.channel_name !== "bot-cmds") {
        return res.send("> :bow: sorry this command only works in <#C01LB9BKRB8|bot-cmds>");
    }

    res.send(":pick: minning....");

    try {
        let acc = await Bank.getAccount(req.body.user_id);
        
        let coins = coinGenerator();

        await acc.updateBalance(coins, 'credit');

    slack.chat.postEphemeral({
        token: config.slack.bot_token,
        channel: req.body.channel_name,
        user: req.body.user_id,
        text: `> :tada: Found _${coins} tp_ :tada: 
        > <@${req.body.user_id}|user> current account balance is _${acc.balance}_
        `
    })

    } catch (error) {
        try {
            await slack.chat.postEphemeral({
                token: config.slack.bot_token,
                channel: req.body.channel_name,
                user: req.body.user_id,
                text: error
            })
        } catch (error) {
            res.staus(404).send(error)
        }
    }
}

const coinGenerator = () => {
    const coinPool = [10, 10, 10, 10, 10, 10, 10, 50, 50, 50, 50, 50, , 100, 100, 100, 100];
    let n = Math.floor(Math.random() * (coinPool.length - 1)) + 1;
    return coinPool[n];
}

module.exports = {
    mine
}