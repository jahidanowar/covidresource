const express = require("express");
const router = express.Router();
const resourceController = require("./../controllers/resourceController");

//Resources Route
router
  .route("/resource/")
  .get(resourceController.index)
  .post(resourceController.store);
//Resource Route
router
  .route("/resource/:slug/")
  .get(resourceController.show)
  .patch(resourceController.update);

module.exports = router;
