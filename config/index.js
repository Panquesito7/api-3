require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    airtable: {
        api_key: process.env.AIRTABLE_API_KEY,
        bases: {
            team: process.env.TEAM_BASE
        }
    }
}