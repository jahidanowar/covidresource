const express = require("express");
const router = express.Router();
const resourceController = require("./../controllers/resourceController");
const cache = require('../middleware/cacheMiddleware');

//Resources Route
router
  .route("/resource/")
  .get([cache.cacheMiddleware(30)],resourceController.index)
  .post(resourceController.store);
//Resource Route
router
  .route("/resource/:slug/")
  .get([cache.cacheMiddleware(30)],resourceController.show)
  .patch(resourceController.update);

module.exports = router;
