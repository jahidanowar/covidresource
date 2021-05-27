const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const checkAuth = require("../middleware/checkAuthMiddleware");
const moderatorMiddleware = require("../middleware/moderatorMiddleware");

// User Route
router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/user", [checkAuth.verifyToken], userController.user);

router.post("/logout", [checkAuth.verifyToken], userController.logout);

router.get(
  "/users",
  [checkAuth.verifyToken, moderatorMiddleware.isModerator],
  userController.index
);
router.patch(
  "/users/:id",
  [checkAuth.verifyToken, moderatorMiddleware.isModerator],
  userController.update
);
router.delete(
  "/users/:id",
  [checkAuth.verifyToken, moderatorMiddleware.isModerator],
  userController.destroy
);

module.exports = router;
