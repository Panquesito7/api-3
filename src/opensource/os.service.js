const Axios = require('axios').default;
const { github } = require('../config');
const {PublicRepos} = require('./os.entity')


class Service {
    constructor() {
        this.BASE_URL = github.org_api_url
    }
    async ownedPublicRepos() {
        try {
            let data = await Axios({
                url: this.BASE_URL + `/repos`,
                method: 'GET',
            })

            return data.data.map (el => {
                if(el.private === false){
                    return PublicRepos({
                        name: el.name,
                        html_url: el.html_url,
                        language: el.language,
                        description: el.description,
                        stars: el.stargazers_count,
                        issues_count: el.open_issues_count
                    })
                }
            });
        } catch (error) {
            throw error
        }
    }

    async orgDetails() {
        try {
            let data = await Axios({
                url: this.BASE_URL,
                method: 'GET',
            })

            return data.data;
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Service();