const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it('responds with "Hello World"', async () => {
    const chai = await import("chai");
    const expect = chai.expect;
    await request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        expect(response.text).to.equal("Hello World");
      });
  });
});
