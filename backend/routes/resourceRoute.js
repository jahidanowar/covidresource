const express = require("express");
const route = express.Router();
const resourceController = require("./../controllers/resourceController");

router
  .route("resource")
  .get(resourceController.index)
  .post(resourceController.store);
router
  .route("resource/:slug")
  .get(resourceController.show)
  .patch(resourceController.update);
