var express = require("express");
const validatorController = require("../controllers/validatorController");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Esta funcionando");
});
router.post("/validate-id", function (req, res) {
  validatorController.getIdValidated(req, res);
});

module.exports = router;
