const knex = require("knex");
const app = require("../src/app");

describe("Category Endpoints", function () {
    let db;

    before("make knex instance", () => {
        db = knex({
            client: "pg",
            connection: process.env.DATABASE_URL,
        });
        app.set("db", db);
    });

    describe(`GET /api/categories`, () => {
        context("Given there are categories in the database", () => {
            it("responds with 200 and all of the categories", () => {
                return supertest(app).get("/api/categories").expect(200);
            });
        });
    });

    describe(`GET /api/sayings`, () => {
        context("Given there are sayings in the database", () => {
            it("responds with 200 and all of the sayings", () => {
                return supertest(app).get("/api/sayings").expect(200);
            });
        });
    });

    describe(`GET /api/sayings/:saying_id`, () => {
        context(`Given bad saying id`, () => {
            it(`responds with 404`, () => {
                const sayingId = 123456;
                return supertest(app)
                    .get(`/api/sayings/${sayingId}`)
                    .expect(404, { error: { message: `Saying doesn't exist` } });
            });
        });
    });
});
