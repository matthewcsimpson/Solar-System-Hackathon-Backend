const knex = require("knex")(require("../knexfile"));

/**
 * GET all planet data.
 * @param {Request} _req
 * @param {Response} res
 */
const getAllPlanets = async (_req, res) => {
  let result = await knex("planets")
    .select("planet_id", "englishName", "meanRadius", "bodyType", "planetType", "star_id")
    .then((planetData) => {
      return planetData;
    })
    .catch((err) => {
      console.error("getAllPlanets", err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });

  res.status(200).json(result);
};

/**
 * GET all dwarf planets
 * @param {Request} _req 
 * @param {Response} res 
 */
const getAllDwarfPlanets = async (_req, res) => {
  let result = await knex("planets")
    .select("planet_id", "englishName", "meanRadius", "bodyType", "star_id")
    .where({bodyType: "Dwarf Planet"})
    .then((planetData) => {
      return planetData;
    })
    .catch((err) => {
      console.error("getAllPlanets", err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });

  res.status(200).json(result);
};

/**
 * GET all planets
 * @param {Request} _req 
 * @param {Response} res 
 */
const getAllLargePlanets = async (_req, res) => {
  let result = await knex("planets")
    .select("planet_id", "englishName", "meanRadius", "bodyType", "star_id")
    .where({bodyType: "Planet"})
    .then((planetData) => {
      return planetData;
    })
    .catch((err) => {
      console.error("getAllPlanets", err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });

  res.status(200).json(result);
};

module.exports = { getAllPlanets, getAllDwarfPlanets, getAllLargePlanets };
