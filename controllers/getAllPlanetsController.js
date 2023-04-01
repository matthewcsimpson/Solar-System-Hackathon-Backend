const knex = require("knex")(require("../knexfile"));

/**
 * GET all planet data.
 * @param {Request} req
 * @param {Response} res
 */
const getAllPlanets = async (req, res) => {
  let result = await knex("planets")
    .select(
      "planet_id",
      "englishName",
      "meanRadius",
      "bodyType",
      "planetType",
      "star_id"
    )
    .orderBy(req.query.sortColumn || "perihelion")
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
 * @param {Request} req
 * @param {Response} res
 */
const getAllDwarfPlanets = async (req, res) => {
  let result = await knex("planets")
    .select("planet_id", "englishName", "meanRadius", "bodyType", "star_id")
    .where({ bodyType: "Dwarf Planet" })
    .orderBy(req.query.sortColumn || "perihelion")
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
 * @param {Request} req
 * @param {Response} res
 */
const getAllLargePlanets = async (req, res) => {
  let result = await knex("planets")
    .select("planet_id", "englishName", "meanRadius", "bodyType", "star_id")
    .where({ bodyType: "Planet" })
    .orderBy(req.query.sortColumn || "perihelion")
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
