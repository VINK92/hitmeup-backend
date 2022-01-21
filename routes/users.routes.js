const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

router.get(
  "/users",
  usersController.authorize,
  usersController.validateUserRole,
  usersController.getAllUsers
);
router.post(
  "/auth/register",
  usersController.validateUser,
  usersController.register
);
router.post("/auth/login", usersController.validateUser, usersController.login);
router.post("/auth/logout/:userId", usersController.logout);

module.exports = router;
