const knex = require("knex")(require("../knexfile"));

/**
 * Controller to return star details.
 * @param {Request} req
 * @param {Response} res
 */
const getPlanetById = async (req, res) => {
  let planet = await knex("planets")
    .where("planet_id", req.params.planet_id)
    .then((planetData) => {
      return planetData[0];
    })
    .catch((err) => {
      console.error("getPlanetById", err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });

  let planetMoons = await knex("moons")
    .select({
      moon_id: "moons.moon_id",
      moonEnglishName: "moons.englishName",
    })
    .where("planet_id", req.params.planet_id)
    .orderBy("perihelion")
    .then((moonData) => {
      return moonData;
    })
    .catch((err) => {
      console.error("getPlanetById", err);
      res.json({
        message: "Something went wrong getting moon data",
        error: err,
      });
    });

  Object.assign(planet, { moons: planetMoons });
  res.status(200).json(planet)
};

module.exports = { getPlanetById };
