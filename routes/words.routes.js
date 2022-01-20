const { Router } = require("express");
const router = Router();
const wordController = require("../controllers/word.controller");
const usersController = require("../controllers/users.controller");

/**
 *  Routs for:
 *  - get all words
 *  - get one word by id
 *  - add new word
 *  - delete one word
 */
router.get("/words", wordController.getAllWords);
router.get("/words/:wordId", wordController.getWordById);
router.post(
  "/words/new",
  usersController.validateUserRole,
  wordController.validateCreateWord,
  wordController.addWord
);
router.post(
  "/words/delete/:wordId",
  usersController.validateUserRole,
  wordController.validateId,
  wordController.deleteWord
);

module.exports = router;
