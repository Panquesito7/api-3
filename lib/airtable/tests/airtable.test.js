const Airtable = require('../index')

const airtable = new Airtable();

test('fetch all the core team data', () => {
    return airtable.coreTeam().then(data => {
        expect(data).toBeTruthy();
    })
})