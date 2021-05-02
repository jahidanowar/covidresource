const express = require("express");
const router = express.Router();
const resourceController = require("./../controllers/resourceController");
const cache = require("../middleware/cacheMiddleware");
const checkAuth = require("../middleware/checkAuthMiddleware");

//Resources Route
router
  .route("/resource/")
  .get([cache.cacheMiddleware(30)], resourceController.index)
  .post(resourceController.store);

//Dashboard Routes
router.get(
  "/resource/pending",
  [checkAuth.verifyToken],
  resourceController.getPendingResources
);

//Resource Route
router
  .route("/resource/:slug/")
  .get([cache.cacheMiddleware(30)], resourceController.show)
  .patch([checkAuth.verifyToken], resourceController.update);

module.exports = router;
