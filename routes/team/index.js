const router = require('express').Router();
const {
    fetchCoreTeam
} = require('../../controller/team')

router.route('/core_team')
    .get(fetchCoreTeam)

module.exports = router;