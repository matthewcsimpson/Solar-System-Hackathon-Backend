const express = require("express");
const router = express.Router();

// Controllers
const { getAllBodies } = require("../controllers/getAllBodiesController");
const { getAllPlanets } = require("../controllers/getAllPlanetsController");
const { getStar } = require("../controllers/starController");
// const { getAllPlanets } = require("../controllers/planetsController");

// GET all bodies in the stellar system. 
router.get("/", getAllBodies);

// GET the details for the star
router.get("/star", getStar);

// GET all planets
router.get('/planets', getAllPlanets)

module.exports = router;
