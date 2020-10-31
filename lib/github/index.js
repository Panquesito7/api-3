const axios = require('axios');

class Github {
    constructor() {
        this.BASE_URL = 'https://api.github.com';
    }
    async fetchOrgRepos(org) {
        let url = this.BASE_URL + `/orgs/:${org}/repos`;
        try {
            let data = await axios.get(url);
            return data.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Github