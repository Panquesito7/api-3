const job = require('../../repository');

const fetchAllOrgRepo = async (req, res) => {
    try {
        let repos = await job.github.fetchOrgRepos('Tech-Phantoms');

        return res.status(200).json(repos);
    } catch (error) {
        return res.status(404).send(error);
    }
}

module.exports = {
    fetchAllOrgRepo
}