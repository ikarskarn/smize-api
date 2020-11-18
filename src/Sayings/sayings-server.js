const SayingsService = {
    getAllSayings(knex) {
        return knex.select("*").from("smize_sayings");
    },
    insertSaying(knex, newSaying) {
        return knex
            .insert(newSaying)
            .into("smize_sayings")
            .returning("*")
            .then((rows) => rows[0]);
    },
    getById(knex, id) {
        return knex.from("smize_sayings").select("*").where("id", id).first();
    },
    deleteSaying(knex, id) {
        return knex("smize_sayings").where({ id }).delete();
    },
    updateSaying(knex, id, newSayingFields) {
        return knex("smize_sayings").where({ id }).update(newSayingFields);
    },
};

module.exports = SayingsService;
