const router = require('express').Router();
const team = require('./team');



router.route('/')
    .get((req, res) => {
        return res.send('TechPhantoms API')
    })

router.route('/team/coreteam')
    .get(team.fetchCoreTeam)

module.exports = router