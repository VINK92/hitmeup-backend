const { Router } = require("express");
const router = Router();
const adminController = require("../controllers/admin.controller");
const authController = require("../controllers/auth.controller");
const validationController = require("../controllers/validation.controller");

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
