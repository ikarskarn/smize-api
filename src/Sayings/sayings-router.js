const path = require("path");
const express = require("express");
const xss = require("xss");
const SayingsService = require("./sayings-server");

const sayingsRouter = express.Router();
const jsonParser = express.json();

const serializeSaying = (saying) => ({
    id: saying.id,
    category_id: parseInt(saying.category_id),
    saying_content: xss(saying.saying_content),
});

//GET and POST
sayingsRouter
    .route("/")
    .get((req, res, next) => {
        const knexInstance = req.app.get("db");
        SayingsService.getAllSayings(knexInstance)
            .then((sayings) => {
                res.json(sayings.map(serializeSaying));
            })
            .catch(next);
    })
    .post(jsonParser, (req, res, next) => {
        const { category_id, saying_content } = req.body;
        const newSaying = {
            category_id,
            saying_content,
        };

        for (const [key, value] of Object.entries(newSaying)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` },
                });
            }
        }

        SayingsService.insertSaying(req.app.get("db"), newSaying)
            .then((saying) => {
                res.status(201)
                    .location(path.posix.join(req.originalUrl, `/${saying.id}`))
                    .json(serializeSaying(saying));
            })
            .catch(next);
    });

//GET by id and DELETE
sayingsRouter
    .route("/:saying_id")
    .all((req, res, next) => {
        const knexInstance = req.app.get("db");
        SayingsService.getById(knexInstance, req.params.saying_id)
            .then((saying) => {
                if (!saying) {
                    return res.status(404).json({
                        error: { message: `Saying doesn't exist` },
                    });
                }
                res.saying = saying;
                next();
            })
            .catch(next);
    })
    .get((req, res) => {
        res.json(serializeSaying(res.saying));
    })
    .delete((req, res, next) => {
        const knexInstance = req.app.get("db");
        SayingService.deleteSaying(knexInstance, req.params.saying_id)
            .then(res.status(204).end())
            .catch(next);
    })
    .patch(jsonParser, (req, res, next) => {
        const { category_id, saying_content } = req.body;
        const sayingToUpdate = {
            category_id,
            saying_content,
        };

        const numberOfValues = Object.values(sayingToUpdate).filter(Boolean).length;
        if (numberOfValues === 0) {
            return res.status(400).json({
                error: {
                    message: `Request body must contain 'category' and 'saying_content'`,
                },
            });
        }

        SayingsService.updateSaying(req.app.get("db"), req.params.saying_id, sayingToUpdate)
            .then(res.status(204).end())
            .catch(next);
    });

module.exports = sayingsRouter;
