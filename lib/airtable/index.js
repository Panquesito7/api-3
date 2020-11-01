const axios = require('axios');
require('dotenv').config()

module.exports = class {
    constructor(){
        this._BASE_URL = `https://api.airtable.com/v0/${process.env.TEAM_BASE}`
    }
    async coreTeam(){
        try {
            let data = await axios.default({
                url: this._BASE_URL + `/core_team`,
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
                },
                method: 'get'
            })
            
            return data.data
        } catch (error) {
            throw error
        }
    }
}