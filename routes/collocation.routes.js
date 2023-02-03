const { Router } = require("express");
const router = Router();
const collocationsController = require("../controllers/collocation.controller");
const validateController = require("../controllers/validation.controller");

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
  validateController.validateUserRole,
  validateController.validateCreateCollocation,
  collocationsController.addCollocation
);
router.post(
  "/delete/:collocationId",
  validateController.validateUserRole,
  validateController.validateCollocationId,
  collocationsController.deleteCollocation
);

module.exports = router;
