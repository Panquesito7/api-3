const Slack = require('slack');
const Axios = require('axios').default;
const { slack } = require('../config')

const invite = async (req, res) => {
    const { email } = req.body;
    let INVITE_URL = "https://slack.com/api/admin.users.invite";
    try {
        let res = await Axios({
            url: INVITE_URL,
            data: {
                email: email,
                token: slack.bot_token,
                team_id: slack.team_id,
                channel_ids: [slack.general_channel_id]
            }
        });

        return res.status(201).json(res.data);
    } catch (error) {
        console.log(error)
        return res.status(404).send(error);
    }
}

const projects = async (req,res) => {
    let URL = "https://api.github.com/orgs/Tech-Phantoms/repos";

    console.log(req.body);
    res.send();
    try {
        const res = await Axios({
            url: URL,
            method: 'GET'
        });
        let response = `> Check out our projects: \n`;
        res.data.forEach(el => {
            if(el.private === false){
                response = response + `* ${el.name} - ${el.html_url} \n`;
            }
        })
        Slack.chat.postMessage({
            token: slack.bot_token,
            channel: 'random',
            text: response
        });
        //res.send(response);
    } catch (error) {
        console.log(error)
        return res.status(404).send(error);
    }
}


module.exports = {
    invite,
    projects
}