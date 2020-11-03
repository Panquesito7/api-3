const service = require('./events.service');

class EventsController {

    async fetchAllEvent(req, res) {
        try {
            let response = await service.fetchEvents();

            return res.status(200).json(response);
        } catch (error) {
            return res.status(404).send(error)
        }
    }
}

module.exports = new EventsController();