const { Router } = require("express");
const router = Router();
const collocationsController = require("../controllers/collocation.controller");
const usersController = require("../controllers/users.controller");

/**
 *  Routs for:
 *  - get all collocations
 *  - get one collocation by id
 *  - add new collocation
 *  - delete one collocation
 */
router.get("/collocations", collocationsController.getAllCollocations);
router.get("/collocations/:wordId", collocationsController.getCollocationById);
router.post(
  "/collocations/new",
  usersController.validateUserRole,
  collocationsController.validateCreateCollocation,
  collocationsController.addCollocation
);
router.post(
  "/collocations/delete/:wordId",
  usersController.validateUserRole,
  collocationsController.validateId,
  collocationsController.deleteCollocation
);

module.exports = router;
