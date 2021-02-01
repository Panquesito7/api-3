const router = require('express').Router();
const {
    invite,
    projects
} = require('./slack.controller');

// Slash commands
const {
    mine
} = require('./slack.slash') 

router.post('/invite', invite)


// slash commands 
router.post('/commands/mine', mine);

router.post('/commands/projects', projects);


module.exports = router;