"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experimento = void 0;
const mongodb_conexion_1 = require("../db/mongodb.conexion");
const mongoose_1 = require("mongoose");
const experimentoSchema = new mongoose_1.Schema({
    espectrometro: { type: String },
    fecha_entrada: { type: Date, required: true },
    fecha_salida: { type: Date },
    usuario_entrada: { type: String, required: true },
    usuario_salida: { type: String },
    muestra: { type: String, required: true },
    solicitud: { type: String, required: true },
    sonda: { type: String },
    nucleo: { type: String },
    completo: { type: Boolean },
    visible: { type: Boolean }
});
exports.Experimento = mongodb_conexion_1.conexion.model("Experimento", experimentoSchema);
