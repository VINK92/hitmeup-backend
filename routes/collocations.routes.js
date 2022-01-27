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
router.get("/getAllCollocations", collocationsController.getAllCollocations);
router.get("/:collocationId", collocationsController.getCollocationById);
router.post(
  "/new",
  usersController.validateUserRole,
  collocationsController.validateCreateCollocation,
  collocationsController.addCollocation
);
router.post(
  "/delete/:collocationId",
  usersController.validateUserRole,
  collocationsController.validateId,
  collocationsController.deleteCollocation
);

module.exports = router;
