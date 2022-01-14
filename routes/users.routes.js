const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

router.post(
  "/auth/register",
  usersController.validateUser,
  usersController.register
);
router.post("/auth/login", usersController.validateUser, usersController.login);
router.post("/auth/logout/:userId", usersController.logout);
// router.get(
//   "/users/current",
//   usersController.authorize,
//   usersController.getCurrentUser
// );

module.exports = router;
