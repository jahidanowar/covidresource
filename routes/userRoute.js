const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");
const checkAuth = require("../middleware/checkAuthMiddleware");

// User Route
router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/user", [checkAuth.verifyToken], userController.user);

router.post("/logout", [checkAuth.verifyToken], userController.logout);

module.exports = router;
