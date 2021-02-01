const { Bank } = require('../models/bank');
const slack = require('slack');

const mine = async (req, res) => {
    if (req.body.channel_name !== "bot-cmds") {
        return res.send("> :bow: sorry this command only works in <#C01LB9BKRB8|bot-cmds>");
    }

    let coins = coinGenerator();

    return res.send(`> :tada: Found _${coins} tp_ :tada: 
    > <@${req.body.user_id}|user> _${coins}_ tp is being added to your account
    `)
}

const coinGenerator = () => {
    const coinPool = [10, 10, 10, 10, 10, 10, 10, 50, 50, 50, 50, 50, , 100, 100, 100, 100];
    let n = Math.floor(Math.random() * coinPool.length) + 1;
    return coinPool[n];
}

module.exports = {
    mine
}