const express = require("express");
const app = express();
const resourceRoute = require("./routes/resourceRoute");


/**
 * Routes Registration
 */
app.use("api/v1/", resourceRoute);

/**
 * Unknown Route
 */
app.all("*", (req, res) => {
  res.status(404).json(`${req.originalUrl} does not exists.`);
});

module.exports = app;
