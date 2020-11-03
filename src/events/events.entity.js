
function Event({
    id,
    eventRecordingLink,
    eventImage,
    time,
    title,
    description,
    regLink,
    date,
    mlsaEvent
}) {
    return {
        id,
        eventRecordingLink,
        eventImage,
        time,
        title,
        description,
        regLink,
        date,
        mlsaEvent
    }
}

module.exports = {
    Event
}