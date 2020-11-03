const Axios = require('axios').default;
const { airtable } = require('../config');
const { Event } = require('./events.entity');

class Service {
    constructor() {
        this.BASE_URL = `https://api.airtable.com/v0/${airtable.bases.event}`
    }

    async fetchEvents() {
        try {
            let data = await Axios({
                url: this.BASE_URL + `/Events`,
                headers: {
                    Authorization: `Bearer ${airtable.api_key}`,
                },
                method: 'GET'
            })

            return data.data.records.map(el => {
                return Event({
                    id: el.id,
                    eventRecordingLink: el.fields.event_recording_link,
                    eventImage: {
                        url: el.fields.eventImg[0].url,
                        filename: el.fields.eventImg[0].filename
                    },
                    time: el.fields.time,
                    title: el.fields.title,
                    description: el.fields.description,
                    regLink: el.fields.reg_link,
                    data: el.fields.date,
                    mlsaEvent: el.fields.mlsa_event
                })
            })
        } catch (error) {
            throw error;
        }
    }
}


module.exports = new Service();