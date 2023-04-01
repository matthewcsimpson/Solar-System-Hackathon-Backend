const knex = require("knex")(require("../knexfile"));

/**
 * Function to return all stellar data at once.
 * @param {Request} req
 * @param {Response} res
 */
const getAllBodies = async (req, res) => {
  let starData = await knex("star")
    .select("star_id", "englishName", "meanRadius")
    .then((starData) => {
      return starData;
    })
    .catch((err) => {
      console.error("getAllBodies", err);
      res.json({
        message: "Something went wrong getting STAR data",
        error: err,
      });
    });

  let planetsData = await knex("planets")
    .select(
      "planet_id",
      "englishName",
      "meanRadius",
      "bodyType",
      "planetType",
      "star_id"
    )
    .orderBy(req.query.sortColumn || "perihelion")
    .then((planetsData) => {
      return planetsData;
    })
    .catch((err) => {
      console.error("getAllBodies", err);
      res.json({
        message: "Something went wrong getting PLANET data",
        error: err,
      });
    });

  let moonData = await knex("moons")
    .select({
      moon_id: "moons.moon_id",
      englishName: "moons.englishName",
      meanRadius: "moons.meanRadius",
      planet_id: "moons.planet_id",
      planetEnglishName: "planets.englishName",
    })
    .join("planets", "moons.planet_id", "planets.planet_id")
    .orderBy("moons.planet_id")
    .orderBy(
      req.query.sortColumn
        ? `moons.${req.query.sortColumn}`
        : "moons.perihelion"
    )
    .then((moonData) => {
      return moonData;
    })
    .catch((err) => {
      console.error("getAllBodies", err);
      res.json({
        message: "Something went wrong getting MOON data",
        error: err,
      });
    });

  let returnData = {
    star: starData,
    planets: planetsData,
    moons: moonData,
  };

  res.status(200).json(returnData);
};

module.exports = { getAllBodies };
