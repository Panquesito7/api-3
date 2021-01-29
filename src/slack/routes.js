const router = require('express').Router();
const {
    invite,
    projects
} = require('./slack.controller');

// 

router.post('/invite', invite)


// slash commands 
router.post('/commands/mine', (req, res) => {

});

router.post('/commands/projects', projects);


module.exports = router;