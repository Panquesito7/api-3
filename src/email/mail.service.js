const mailjetClient = require('node-mailjet');
const { mailjet } = require('../config');

class Mail {
    constructor() {
        this.mailjet = mailjetClient.connect(mailjet.api_key, mailjet.secret_key);
    }

    async sendMail({ subject, text, html, recipientsLists }) {
        let to = recipientsLists.map(el => {
            return { Email: el }
        });
        try {
            let res = await this.mailjet.post('send').request({
                FromEmail: mailjet.mail,
                FromName: "TechPhantoms",
                Subject: subject,
                "Text-part": text,
                "Html-part": html,
                Recipients: to
            })

            return res
        } catch (error) {
            throw error
        }
    }
}


module.exports = new Mail();