const express = require("express");
const router = express.Router();

// Controllers
const { getAllBodies } = require("../controllers/getAllBodiesController");
const {
  getAllPlanets,
  getAllDwarfPlanets,
  getAllLargePlanets,
  getAllPlanetsDetail
} = require("../controllers/getAllPlanetsController");
const { getPlanetById } = require("../controllers/getPlanetByIdController");
const { getStar } = require("../controllers/getStarController");
const { getAllMoons, getAllMoonsByPlanet } = require("../controllers/getAllMoonsController");
const { getMoonById } = require("../controllers/getMoonByIdController");

// GET all bodies in the stellar system.
router.get("/", getAllBodies);

// GET the details for the star
router.get("/star", getStar);

// GET all planets, dwarf planets, and large planets
router.get("/planets", getAllPlanets);
router.get("/planets/dwarf", getAllDwarfPlanets);
router.get("/planets/planet", getAllLargePlanets);
router.get('/planetsDetail', getAllPlanetsDetail);

// GET a planet by its planet_id
router.get("/planet/:planet_id", getPlanetById);

// GET all moons
router.get("/moons", getAllMoons);

// GET all moons by the planet they orbit. 
router.get('/moons/:planet_id', getAllMoonsByPlanet)

// GET a single moon by its ID. 
router.get('/moon/:moon_id', getMoonById)

module.exports = router;
