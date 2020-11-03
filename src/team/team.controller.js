const service = require('./team.service')

class TeamController {

    async fetchCoreTeam(req, res) {
        try {
            let response = await service.coreTeam();

            return res.status(200).json(response);
        } catch (error) {
            console.log(error)
            return res.status(404).json(error)
        }
    }
}

module.exports = new TeamController();