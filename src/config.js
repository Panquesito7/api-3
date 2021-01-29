require('dotenv').config()
module.exports = {
    port: process.env.PORT || 5000,
    airtable: {
        api_key: process.env.AIRTABLE_API_KEY,
        bases: {
            team: process.env.TEAM_BASE,
            event: process.env.EVENT_BASE
        }
    },
    mailjet: {
        api_key: process.env.MAILJET_API_KEY,
        secret_key: process.env.MAILJET_SECRET_KEY,
        mail: 'opensource@techphantoms.tech'
    },
    github: {
        org_api_url: 'https://api.github.com/orgs/Tech-Phantoms'
    },
    mongo: {
        uri: process.env.MONGO_URI
    },
    slack: {
        bot_token: process.env.SLACK_BOT_TOKEN,
        team_id: process.env.SLACK_TEAM_ID,
        general_channel_id: process.env.SLACK_GENERAL_CHANNEL_ID
    }
}