import { conexion } from '../db/mongodb.conexion';
import { Schema } from 'mongoose';

const experimentoSchema = new Schema({
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

export const Experimento = conexion.model("Experimento", experimentoSchema);