const emailClient = require('./mail.service');

exports.sendEventInvite = async (users, eventDetails) => {
    /**
     * Will send email invites to all the users 
     * who have RSVP the event.
     */
}

//This function is for future idea
exports.sendEmailforEventCreation = async () => {
    /**
     * Will send email notification when a new 
     * event will be created.
     */
}

const getEventInviteTemplate = ({ name, description, eventImage, date, time, mlsa_event, reg_link }) => {
    // we can create a beautifull html template
    let template = require('./template').inviteTemplate

    template = template.replace(/{{name}}/, name);
    template = template.replace(/{{description}}/, description);
    template = template.replace(/{{eventImage}}/, eventImage);
    template = template.replace(/{{date}}/, date);
    template = template.replace(/{{time}}/, time);
    template = template.replace(/{{mlas_event}}/,mlsa_event);
    template = template.replace(/{{reg_link}}/, reg_link);

    return template;
}