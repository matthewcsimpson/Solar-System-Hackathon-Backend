const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Set responses in JSON, and public folder.
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
const stellarRouter = require("./routes/stellarRouter");

// Server port.
const PORT = process.env.PORT || 5555;

// console log all requests
app.use((req, _res, next) => {
  console.info(`Incoming request from ${req.originalUrl}`);
  next();
});

// GET star details and full stellar system details  
app.use("/stellar", stellarRouter);




// Listening
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
