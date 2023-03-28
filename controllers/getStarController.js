const knex = require("knex")(require("../knexfile"));

/**
 * Controller to return star details.
 * @param {Request} _req
 * @param {Response} res
 */
const getStar = async (_req, res) => {
  await knex("star")
    .then((starData) => {
      res.status(200).json(starData[0]);
    })
    .catch((err) => {
      console.error("getStar", err);
      res.json({
        message: "Something went wrong getting star data",
        error: err,
      });
    });
};

module.exports = { getStar };
