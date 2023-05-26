const request = require("supertest")
const baseURL = "http://localhost:5000";

describe(`GET ${baseURL}/api/admin`, () => {
    const newAdmin = {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@gmail.com",
                password: "123456",
    }
    beforeAll(async () => {
        await request(baseURL).post("/api/admin").send(newAdmin);
    });
    afterAll(async () => {
        await request(baseURL).delete(`/api/admin/${newAdmin._id}`);
    });
    it("should return 200 OK", async () => {
        const response = await request(baseURL).get("/api/admin");
        expect(response.statusCode).toBe(200);
    });
    it("should return data", async () => {
        const response = await request(baseURL).get(`/api/admin`);
        expect(response.body.length >= 1).toBe(true);
    });
});

describe(`POST ${baseURL}/api/admin`, () => {
    const newAdmin = {
                firstName: "John",
                lastName: "Doe",
                email: "john@gmail.com",
                password: "123456",
            }
    afterAll(async () => {
        await request(baseURL).delete(`/api/admin/${newAdmin._id}`);
    });
    it("should add Admin", async () => {
        const response = await request(baseURL).post("/api/admin").send(newAdmin);
        expect(response.statusCode).toBe(201);
        expect(response.body.data.firstName).toBe(newAdmin.firstName);
        expect(response.body.data.lastName).toBe(newAdmin.lastName);
        expect(response.body.data.email).toBe(newAdmin.email);
    })

});

describe(`DELETE ${baseURL}/api/admin`, () => {
    const newAdmin = {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        password: "123456",
    }
    beforeAll(async () => {
        await request(baseURL).post("/api/admin").send(newAdmin);
    });
    it("should delete Admin", async () => {
        const testRequest = await request(baseURL).get(`/api/admin`);
        const testAdmin = testRequest.body[testRequest.body.length - 1];
        const response = await request(baseURL).delete(`/api/admin/${testAdmin._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.firstName).toBe(newAdmin.firstName);
        expect(response.body.lastName).toBe(newAdmin.lastName);
        expect(response.body.email).toBe(newAdmin.email);
    })
});