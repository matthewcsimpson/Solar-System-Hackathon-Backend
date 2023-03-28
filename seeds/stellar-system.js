const starData = require("../seed_data/starData");
const planetsData = require("../seed_data/planetsData");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("star").del();
  await knex("star").insert(starData);
  await knex("planets").del();
  await knex("planets").insert(planetsData);
};
