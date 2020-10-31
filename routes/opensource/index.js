const router = require('express').Router();
const {
    fetchAllOrgRepo
} = require('../../controller/opensource');

// repo
router.route('/repos')
    .get(fetchAllOrgRepo);

module.exports = router;