const express = require("express");
const knex = require("knex")(require("../knexfile"));

/**
 * Function to return all stellar data at once.
 * @param {*} _req
 * @param {*} res
 */
const getAllBodies = async (_req, res) => {
  let starData = await knex("star")
    .then((starData) => {
      return starData;
    })
    .catch((err) => {
      console.error(err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });

  let planetsData = await knex("planets")
    .then((planetsData) => {
      return planetsData;
    })
    .catch((err) => {
      console.error(err);
      res.json({
        message: "Something went wrong getting planet data",
        error: err,
      });
    });

  let returnData = {
    star: starData,
    planets: planetsData,
  };

  res.status(200).json(returnData);
};

module.exports = { getAllBodies };
