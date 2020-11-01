const rep = require('../../repository');

const fetchCoreTeam = async (req, res) => {
    try {
        let data = await new rep().airtable.coreTeam();

        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = {
    fetchCoreTeam
}