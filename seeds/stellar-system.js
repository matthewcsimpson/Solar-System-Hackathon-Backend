const starData = require("../seed_data/starData");
const planetsData = require("../seed_data/planetsData");
const moonsData = require('../seed_data/moonData')

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
  await knex("moons").del();
  await knex("moons").insert(moonsData);
  
};
