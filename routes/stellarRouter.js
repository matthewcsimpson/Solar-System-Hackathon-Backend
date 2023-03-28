const express = require("express");
const router = express.Router();

// Controllers
const { getAllBodies } = require("../controllers/getAllBodiesController");
const {
  getAllPlanetoids,
  getAllDwarfPlanets,
} = require("../controllers/getAllPlanetsController");
const { getPlanetById } = require("../controllers/getPlanetByIdController");
const { getStar } = require("../controllers/getStarController");
// const { getAllPlanets } = require("../controllers/planetsController");

// GET all bodies in the stellar system.
router.get("/", getAllBodies);

// GET the details for the star
router.get("/star", getStar);

// GET all planets
router.get("/planets", getAllPlanetoids);
router.get("/planets/dwarf", getAllDwarfPlanets);

router.get("/planets/:planet_id", getPlanetById);

module.exports = router;
