var ExperimentoService = require('./../services/experimento.service');

exports.getExperimentos = async function (req, res, next) {
    try {
        var experimentos = await ExperimentoService.getExperimentos({})
        res.json(experimentos);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getOneExperimento = async function (req, res, next) {
    var id = req.params.id;

    try {
        var experimentos = await ExperimentoService.getOneExperimento(id)
        res.json(experimentos);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.postExperimento = async function (req, res, next) {
    var experimento = ({
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
        var _experimentoGuardado = await ExperimentoService.createExperimento(experimento);
        res.json(_experimentoGuardado);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e });
    }
}

exports.putExperimento = async (req, res, next) => {
    if (!req.params.id) {
        return res.status(400).json({ status: 400., message: "Id must be present" })
    }
    var id = req.params.id;

    var experimento = ({
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
        var _experimentoGuardado = await ExperimentoService.updateExperimento(experimento);
        res.json(_experimentoGuardado);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ status: 400, message: e });
    }
}

exports.deleteExperimento = async (req, res, next) => {
    var id = req.params.id;

    try {
        var experimentos = await ExperimentoService.deleteExperimento(id)
        res.json(experimentos);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
