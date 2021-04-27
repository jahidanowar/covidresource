const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const erroController = require("./controllers/erroController");
const app = express();
const resourceRoute = require("./routes/resourceRoute");
const AppError = require("./utils/AppError");

// Connect with DataBase
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("You are successfully connect with MongoDb Database");
  } catch (error) {
    console.log("App starting error: ", error.stack);
    process.exit(1);
  }
})();


// JSON poperty Define
// JSON Inbuilt Middleware
app.use(express.json());
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
