var express = require("express");
var router = express.Router();
var ExperimentoController = require("../controllers/experimento.controller");

router.route("/")
    .get(ExperimentoController.getExperimentos)
    .post(ExperimentoController.postExperimento)

router.route("/:id")
    .get(ExperimentoController.getOneExperimento)
    .put(ExperimentoController.putExperimento)
    .delete(ExperimentoController.deleteExperimento)

module.exports = router;
