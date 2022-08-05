const { Router } = require("express");
const router = Router();
const usersController = require("../user/users.controller");
const authController = require("../auth/auth.controller");
const validationController = require("../commonControllers/validation.controller");
const wordController = require("../word/word.controller");

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
