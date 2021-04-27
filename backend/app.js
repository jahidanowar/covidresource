const express = require("express");
const erroController = require("./controllers/erroController");
const app = express();
const resourceRoute = require("./routes/resourceRoute");
const AppError = require("./utils/AppError");

/**
 * Routes Registration
 */
app.use("/api/v1", resourceRoute);

/**
 * Unknown Route
 */
app.all("*", (req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} doesn't exists`, 404));
});

/**
 * Error Controller
 * Transform All Errors
 */
app.use(erroController);

module.exports = app;
