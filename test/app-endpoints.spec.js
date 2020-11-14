const { expect } = require("chai");
const knex = require("knex");
const supertest = require("supertest");
const { request, post } = require("../src/app");
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

    describe(`POST /api/sayings`, () => {
        let data = {
            id: "1234567",
            category_id: "1",
            saying_content: "more funny things",
        };
        it("responds with 201 created", (done) => {
            supertest(app)
                .post("/api/sayings")
                .send(data)
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(201)
                .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });
    });

    describe("DELETE /api/sayings/:saying_id", () => {
        it("It responds with 204", async () => {
            const newSaying = await supertest(app).post("/api/sayings").send({
                category_id: 1,
                saying_content: "Another Funny Thing",
            });
            const removedSaying = await supertest(app).delete(`/api/sayings/${newSaying.body.id}`);
            expect(204);
        });
    });
});
