const knex = require("knex")(require("../knexfile"));

/**
 * Controller to return star details.
 * @param {Request} req
 * @param {Response} res
 */
const getPlanetById = async (req, res) => {
  await knex("planets")
    .where("planet_id", req.params.planet_id)
    .then((planetData) => {
      res.status(200).json(planetData[0]);
    })
    .catch((err) => {
      console.error("getPlanetById", err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });
};

module.exports = { getPlanetById };
