const request = require("supertest");

const app = require("./app");
const db = require("./db");
const { NotFoundError } = require("./expressError");

test("404 handler", async function () {
  try {
    await request(app).get("/no-such-path");
  } catch (err) {
    expect(err instanceof NotFoundError).toBeTruthy();
  }
});

test("Successfully connect to /search", async function () {
  try {
    await request(app)
          .get("/search")
          .expect(200);
  } catch (err) {
    expect(err instanceof NotFoundError).toBeFalsy();
  }
});

test("Successfully connect to /details", async function () {
  try {
    await request(app)
          .get("/details")
          .expect(200);
  } catch (err) {
    expect(err instanceof NotFoundError).toBeFalsy();
  }
});


afterAll(function () {
  db.end();
});
