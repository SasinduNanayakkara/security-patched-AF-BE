const request = require('supertest');
const baseURL = 'https://af-backend.azurewebsites.net';

describe(`GET ${baseURL}/api/client`, () => {
    const newClient = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: '123456',
        phone: '0712345678',
        location: 'Colombo',
        prefix: 'Mr',
    }
    beforeAll(async () => {
        await request(baseURL).post('/api/client').send(newClient);
    });
    afterAll(async () => {
        await request(baseURL).delete(`/api/client/${newClient._id}`);
    });
    it('should return 200 OK', async () => {
        const response = await request(baseURL).get('/api/client');
        expect(response.statusCode).toBe(200);
    });
    it('should return data', async () => {
        const response = await request(baseURL).get(`/api/client`);
        expect(response.body.length >= 1).toBe(false);
    });
});

describe(`POST ${baseURL}/api/client`, () => {
    const newClient = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: '123456',
        phone: '0712345678',
        location: 'Colombo',
        prefix: 'Mr',
    }
    afterAll(async () => {
        await request(baseURL).delete(`/api/client/${newClient._id}`);
    });
    it('should add Client', async () => {
        const response = await request(baseURL).post('/api/client').send(newClient);
        expect(response.statusCode).toBe(201);
        expect(response.body.data.firstName).toBe(newClient.firstName);
        expect(response.body.data.lastName).toBe(newClient.lastName);
        expect(response.body.data.email).toBe(newClient.email);
    });
});

describe(`DELETE ${baseURL}/api/client`, () => {
    const newClient = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: '123456',
        phone: '0712345678',
        location: 'Colombo',
        prefix: 'Mr',
    }
    beforeAll(async () => {
        await request(baseURL).post('/api/client').send(newClient);
    });
    it('should delete Client', async () => {
        const testRequest = await request(baseURL).get(`/api/client`);
        const testClient = testRequest.body[testRequest.body.length - 1];
        const response = await request(baseURL).delete(`/api/client/64597321b9c09f39b211df5e`);
        expect(response.statusCode).toBe(200);
        expect(response.body.data.firstName).toBe(testClient.firstName);
        expect(response.body.data.lastName).toBe(testClient.lastName);
        expect(response.body.data.email).toBe(testClient.email);
    });
});