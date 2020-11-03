const service = require('./os.service')

class OsController {

    async fetchAllRepos(req, res) {
        try {
            let response = await service.ownedPublicRepos();

            return res.status(200).json(response);
        } catch (error) {
            return res.status(404).send(error)
        }
    }

    async fetchDetail(req, res) {
        try {
            let response = await service.orgDetails();

            return res.status(200).json(response);
        } catch (error) {
            return res.status(404).send(error)
        }
    }
}

module.exports = new OsController();