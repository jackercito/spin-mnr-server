import { Router } from 'express';
import * as ExperimentoController from '../controllers/experimento.controller';

export const experimentoRoute = Router();

experimentoRoute.route("/")
        .get(ExperimentoController.getExperimentos)
        .post(ExperimentoController.postExperimento)

experimentoRoute.route("/:id")
        .get(ExperimentoController.getOneExperimento)
        .put(ExperimentoController.putExperimento)
        .delete(ExperimentoController.deleteExperimento)
