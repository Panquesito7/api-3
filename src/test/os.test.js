require('jest');
const app = require('../server');
const superTest = require('supertest');
const request = superTest(app);

describe('OS routes', () => {
    it('/os/details', async () => {
        let res = await request.get('/os/details');
        expect(res.status).toBe(200);
    })

    it('/os/public_repos', async () => {
        let res = await request.get('/os/public_repos');
        expect(res.status).toBe(200);
    })
})

describe('OS Response paramters', () => {
    it('checking for details in the response', async () => {
        let res = await request.get('/os/details');
        expect(res.body.login).toMatch(/Tech-Phantoms/);
        expect(res.body.id).toBe(61622105);
        expect(res.body.type).toMatch(/Organization/);
    })

})