const router = require('express').Router();

const commandRoute = require('./commands');

router.use('/commands', commandRoute);



module.exports = router;