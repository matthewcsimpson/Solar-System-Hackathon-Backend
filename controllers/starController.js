const express = require("express");
const knex = require("knex")(require("../knexfile"));

/**
 * Controller to return star details.
 * @param {Request} _req
 * @param {Response} res
 */
const getStar = async (_req, res) => {
  await knex("star")
    .then((starData) => {
      res.status(200).json(starData);
    })
    .catch((err) => console.error(err));
};

module.exports = { getStar };
