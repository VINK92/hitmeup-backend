const { Router } = require("express");
const router = Router();
const wordController = require("../controllers/word.controller");
const validateController = require("../controllers/validation.controller");

/**
 *  Routs for:
 *  - get all words
 *  - get one word by id
 *  - add new word
 *  - delete one word
 */
router.get("/getAllWords", wordController.getAllWords);
router.get("/:wordId", wordController.getWordById);
router.post(
  "/new",
  validateController.validateAdminRole,
  validateController.validateCreateWord,
  wordController.addWord
);
router.post(
  "/delete/:wordId",
  validateController.validateUserRole,
  wordController.deleteWord
);

module.exports = router;
