const knex = require("knex")(require("../knexfile"));

/**
 * GET all moons
 * @param {Request} req
 * @param {Response} res
 */
const getAllMoons = async (req, res) => {
  await knex("moons")
    .select({
      moon_id: "moons.moon_id",
      englishName: "moons.englishName",
      meanRadius: "moons.meanRadius",
      planet_id: "moons.planet_id",
      planetEnglishName: "planets.englishName",
    })
    .join("planets", "moons.planet_id", "planets.planet_id")
    .orderBy(
      req.query.sortColumn
        ? `moons.${req.query.sortColumn}`
        : "moons.perihelion"
    )
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
    .select({
      moon_id: "moons.moon_id",
      englishName: "moons.englishName",
      meanRadius: "moons.meanRadius",
      planet_id: "moons.planet_id",
      planetEnglishName: "planets.englishName",
    })
    .join("planets", "moons.planet_id", "planets.planet_id")
    .where("moons.planet_id", req.params.planet_id)
    .orderBy(
      req.query.sortColumn
        ? `moons.${req.query.sortColumn}`
        : "moons.perihelion"
    )
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
