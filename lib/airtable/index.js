const axios = require('axios');
const { airtable } = require('../../config')

module.exports = class {
    constructor() {
        this._BASE_URL = `https://api.airtable.com/v0/${airtable.bases.team}`
    }
    async coreTeam() {
        try {
            let data = await axios.default({
                url: this._BASE_URL + `/core_team`,
                headers: {
                    Authorization: `Bearer ${airtable.api_key}`
                },
                method: 'get'
            })

            return data.data
        } catch (error) {
            throw error
        }
    }
}