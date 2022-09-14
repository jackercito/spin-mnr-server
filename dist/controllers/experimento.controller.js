"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExperimento = exports.putExperimento = exports.postExperimento = exports.getOneExperimento = exports.getExperimentos = void 0;
const ExperimentoService = __importStar(require("./../services/experimento.service"));
const getExperimentos = async function (_req, res) {
    try {
        const experimentos = await ExperimentoService.getExperimentos({});
        res.json(experimentos);
    }
    catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
};
exports.getExperimentos = getExperimentos;
const getOneExperimento = async function (req, res) {
    const id = req.params.id;
    try {
        const experimentos = await ExperimentoService.getOneExperimento(id);
        return res.json(experimentos);
    }
    catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
};
exports.getOneExperimento = getOneExperimento;
const postExperimento = async function (req, res) {
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
    }
    catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
};
exports.postExperimento = postExperimento;
const putExperimento = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ status: 400., message: "Id must be present" });
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
    }
    catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
};
exports.putExperimento = putExperimento;
const deleteExperimento = async (req, res) => {
    const id = req.params.id;
    try {
        const experimentos = await ExperimentoService.deleteExperimento(id);
        res.json(experimentos);
    }
    catch (e) {
        if (e instanceof Error)
            return res.status(400).json({ status: 400, message: e.message });
        else
            return res.status(400).json({ status: 400, message: 'Unexpected error: ' + e });
    }
};
exports.deleteExperimento = deleteExperimento;
