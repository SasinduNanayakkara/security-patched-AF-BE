const request = require("supertest")
const baseURL = "http://localhost:5000";

// describe(`GET ${baseURL}/api/admin`, () => {
//     it("should return 200 OK", () => {
//         const response = request.get("/api/admin");
//         expect(response.status).toBe(200);
//         expect(response.body.length).toBeGreaterThan(0);
//     });
// });

let adminData;

describe(`Admin`, () => {
    const newAdmin = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: "123456",
    }

    beforeAll(async () => {
        adminData = await request(baseURL)
        .post("/api/admin")
        .send(newAdmin);
    });
    it ("should return 200 OK", async () => {
        const response = await request(baseURL).get("/api/admin");
        expect(response.status).toBeEqual(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body.error).not.toBe(null);
    });
    it ("should return data", async () => {
        const response = await request(baseURL).get(`${baseURL}/api/admin/${adminData.body.data._id}`);
        expect(response.status).toBeEqual(200);
        expect(response.body.data).not.toBe(null);
    });
    // afterAll(async () => {
    //     await request(baseURL)
    //     .delete(`/api/admin/${adminData.body.data._id}`);
    // });
})