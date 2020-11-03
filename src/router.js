const router = require('express').Router();
const team = require('./team');
const os = require('./opensource');
const events = require('./events');



router.route('/')
    .get((req, res) => {
        return res.send('TechPhantoms API')
    })

router.route('/team/coreteam')
    .get(team.fetchCoreTeam)

// Opensource routes 
router.route('/os/details')
    .get(os.fetchDetail);

router.route('/os/public_repos')
    .get(os.fetchAllRepos);

// Events routs 
router.route('/events')
    .get(events.fetchAllEvent);

module.exports = router