const knex = require("knex")(require("../knexfile"));

/**
 * GET all moons
 * @param {Request} req 
 * @param {Respose} res 
 */
const getMoonById = async (req, res) => {
  knex("moons")
    .where("moon_id", req.params.moon_id)
    .then((moonData) => {
      res.status(200).json(moonData[0]);
    })
    .catch((err) => {
      console.error("getAllMoons", err);
      res.json({
        message: "Something went wrong getting MOONs data",
        error: err,
      });
    });
};


module.exports = { getMoonById };
