const CategoriesService = {
    getAllCategories(knex) {
        return knex.select("*").from("smize_categories");
    },
    insertCategory(knex, newCategory) {
        return knex.insert(newCategory).into("smize_categories").returning("*");
    },
    getById(knex, id) {
        return knex.from("smize_categories").select("*").where("id", id).first();
    },
    deleteCategory(knex, id) {
        return knex("smize_categories").where({ id }).delete();
    },
    updateCategory(knex, id, newCategoryFields) {
        return knex("smize_categories").where({ id }).update(newCategoryFields);
    },
};

module.exports = CategoriesService;
