const router = require('express').Router();
const {
    invite
} = require('./slack.controller');

// 

router.post('/invite', invite)


// slash commands 
router.post('/commands/mine', (req, res) => {

});


module.exports = router;