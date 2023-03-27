const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5555;

// console log all requests
app.use((req, _res, next) => {
  console.info(`Incoming request from ${req.originalUrl}`);
  next();
});

// GET the main index.
app.get("/system", (_req, res) => {
  res.json({ status: "running" });
});

// Listening
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
