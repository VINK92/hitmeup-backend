const { Router } = require("express");
const router = Router();
const usersController = require("../user/users.controller");

router.post("/:userId/add-to-my-words", usersController.addWordToMyWords);
router.post("/:userId/add-to-learned-words", usersController.addWordToLearned);
router.post("/:userId/change-start-level", usersController.changeCurrentLevel);
router.post("/:userId/change-current-level", usersController.changeStartLevel);

module.exports = router;
