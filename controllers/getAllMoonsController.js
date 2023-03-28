const knex = require("knex")(require("../knexfile"));

/**
 * GET all moons
 * @param {Request} _req
 * @param {Response} res
 */
const getAllMoons = async (_req, res) => {
  await knex("moons")
    .select("moon_id", "englishName", "meanRadius", "planet_id")

    .then((moonsData) => {
      res.status(200).json(moonsData);
    })
    .catch((err) => {
      console.error("getAllMoons", err);
      res.json({
        message: "Something went wrong getting MOONs data",
        error: err,
      });
    });
};

const getAllMoonsByPlanet = async (req, res) => {
  await knex("moons")
    .select("moon_id", "englishName", "meanRadius", "planet_id")
    .where("planet_id", req.params.planet_id)
    .then((moonsData) => {
      res.status(200).json(moonsData);
    })
    .catch((err) => {
      console.error("getAllMoons", err);
      res.json({
        message: "Something went wrong getting MOONs data",
        error: err,
      });
    });
};

module.exports = { getAllMoons, getAllMoonsByPlanet };
