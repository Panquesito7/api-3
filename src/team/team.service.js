const Axios = require('axios').default
const { airtable } = require('../config')
const { CoreTeam } = require('./team.entity')

class Service {
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

            return data.data.records.map(el => CoreTeam({
                id: el.id,
                name: el.fields.name,
                email: el.fields.email,
                mobile: el.fields.mobile,
                position: el.fields.position,
                linkedin_profile: el.fields.linkedin_profile,
                github_profile: el.fields.github_profile,
                instagram_profile: el.fields.instagram_profile,
                medium_profile: el.fields.medium_profile,
                gender: el.fields.gender,
                avatar_url: el.fields.avatar_url
            }))

        } catch (error) {
            throw error
        }
    }

}

module.exports = new Service()