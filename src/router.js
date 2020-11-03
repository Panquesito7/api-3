const router = require('express').Router();


router.route('/')
    .get((req, res) => {
        return res.send('TechPhantoms API')
    })

module.exports = router