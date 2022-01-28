const { Router } = require("express");
const router = Router();
const adminController = require("./admin.controller");
const authController = require("../auth/auth.controller");
const validationController = require("../commonControllers/validation.controller");

router.get(
  "/users",
  authController.authorize,
  validationController.validateUserRole,
  adminController.getAllUsers
);
router.get(
  "/words"
  //   authController.authorize,
  //   validationController.validateUserRole,
  //   adminController.getAllUsers
);
router.get(
  "/collocations"
  //   authController.authorize,
  //   validationController.validateUserRole,
  //   adminController.getAllUsers
);

module.exports = router;
