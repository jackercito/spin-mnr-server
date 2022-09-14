import { Request, Response } from 'express'
import * as ExperimentoService from './../services/experimento.service'

export const getExperimentos = async function (_req: Request, res: Response) {
    try {
        const experimentos = await ExperimentoService.getExperimentos({});
        res.json(experimentos);
    } catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
}

export const getOneExperimento = async function (req: Request, res: Response) {
    const id = req.params.id;

    try {
        const experimentos = await ExperimentoService.getOneExperimento(id)
        return res.json(experimentos);
    } catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
}

export const postExperimento = async function (req: Request, res: Response) {
    const experimento = ({
        espectrometro: req.body.espectrometro,
        fecha_entrada: req.body.fecha_entrada,
        fecha_salida: req.body.completo ? req.body.fecha_salida : null,
        usuario_entrada: req.body.usuario_entrada,
        usuario_salida: req.body.completo ? req.body.usuario_salida : '',
        muestra: req.body.muestra,
        solicitud: req.body.solicitud,
        sonda: req.body.sonda,
        nucleo: req.body.nucleo,
        completo: req.body.completo,
        visible: req.body.visible,
    });

    try {
        const _experimentoGuardado = await ExperimentoService.createExperimento(experimento);
        res.json(_experimentoGuardado);
    } catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
}

export const putExperimento = async (req: Request, res: Response) => {
    if (!req.params.id) {
        return res.status(400).json({ status: 400., message: "Id must be present" })
    }
    const id = req.params.id;

    const experimento = ({
        id,
        espectrometro: req.body.espectrometro,
        fecha_entrada: req.body.fecha_entrada,
        fecha_salida: req.body.completo ? req.body.fecha_salida : null,
        usuario_entrada: req.body.usuario_entrada,
        usuario_salida: req.body.completo ? req.body.usuario_salida : '',
        muestra: req.body.muestra,
        solicitud: req.body.solicitud,
        sonda: req.body.sonda,
        nucleo: req.body.nucleo,
        completo: req.body.completo,
        visible: req.body.visible,
    });

    try {
        const _experimentoGuardado = await ExperimentoService.updateExperimento(experimento);
        res.json(_experimentoGuardado);
    } catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
}

export const deleteExperimento = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const experimentos = await ExperimentoService.deleteExperimento(id)
        res.json(experimentos);
    } catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: '+  e });
    }
}
