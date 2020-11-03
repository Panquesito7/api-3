const Axios = require('axios').default
const { airtable } = require('../config')
const { CoreTeam } = require('./team.entity')

module.exports = class Service {
    constructor() {
        this.Base_URL = `https://api.airtable.com/v0/${airtable.bases.team}`
    }

    async coreTeam() {
        try {
            let data = await Axios({
                url: this.Base_URL + '/core_team',
                headers: {
                    Authorization: `Bearer ${airtable.api_key}`
                },
                method: 'GET'
            });
            return data.data

        } catch (error) {
            throw error
        }
    }

}