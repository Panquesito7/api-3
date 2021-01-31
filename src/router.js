const router = require('express').Router();
const team = require('./team');
const os = require('./opensource');
const events = require('./events');
const { slackRoutes } = require('./slack')
const { authRouter } = require('./oauth')



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


// Slack Routes 
router.use('/slack', slackRoutes);

router.use('/auth', authRouter);

module.exports = router