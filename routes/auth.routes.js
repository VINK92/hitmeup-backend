const { Router } = require("express");
const router = Router();
const authController = require("../controllers/auth.controller");
const validationController = require("../controllers/validation.controller");

router.post(
  "/register",
  validationController.validateUser,
  authController.register
);
router.post("/login", validationController.validateUser, authController.login);
router.post("/logout/:userId", authController.logout);

module.exports = router;
