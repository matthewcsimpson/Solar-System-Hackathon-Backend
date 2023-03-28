const express = require("express");
const knex = require("knex")(require("../knexfile"));

const getAllPlanets = async (req, res) => {
  await knex("planets")
    .then((planetData) => {
      res.json(planetData);
    })
    .catch((err) => {
      console.error(err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });
};

module.exports = { getAllPlanets };
