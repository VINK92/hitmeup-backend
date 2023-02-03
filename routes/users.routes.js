const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");
const authController = require("../controllers/auth.controller");
const validationController = require("../controllers/validation.controller");
const wordController = require("../controllers/word.controller");

router.post(
  "/:userId/add-to-my-words/:wordId",
  authController.authorize,
  validationController.validateWordId,
  usersController.addWordToMyWords
);
router.post(
  "/:userId/add-to-learned-words",
  authController.authorize,
  usersController.validateWord,
  usersController.addWordToLearned
);
router.post(
  "/:userId/change-start-level",
  authController.authorize,
  usersController.changeCurrentLevel
);
router.post(
  "/:userId/change-current-level",
  authController.authorize,
  usersController.changeStartLevel
);

module.exports = router;
