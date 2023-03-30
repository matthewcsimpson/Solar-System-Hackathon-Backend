const knex = require("knex")(require("../knexfile"));

/**
 * GET all moons
 * @param {Request} req
 * @param {Respose} res
 */
const getMoonById = async (req, res) => {
  let moon = await knex("moons")
    .where("moon_id", req.params.moon_id)
    .then((moonData) => {
      return moonData[0];
    })
    .catch((err) => {
      console.error("getAllMoons", err);
      res.json({
        message: "Something went wrong getting MOONs data",
        error: err,
      });
    });

  let planet = await knex("planets")
    .select("planets.englishName")
    .where("planets.planet_id", moon.planet_id)
    .then((planetName) => {
      return planetName;
    });

  Object.assign(moon, { planetEnglishName: planet[0].englishName });
  res.status(200).json(moon);
};

module.exports = { getMoonById };
