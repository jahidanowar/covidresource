const express = require("express");
const mongoose = require("mongoose");
const erroController = require("./controllers/erroController");
const app = express();
const cors = require("cors");
const resourceRoute = require("./routes/resourceRoute");
const userRoute = require("./routes/userRoute");
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

//Cors options
const corsOption = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
};
//Cors Middleware
app.use(cors(corsOption));

// JSON poperty Define
// JSON Inbuilt Middleware
app.use(express.json());
/**
 * Routes Registration
 */
app.use("/api/v1", resourceRoute);
app.use("/api/v1/auth", userRoute);

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
