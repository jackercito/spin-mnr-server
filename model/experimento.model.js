var mongoose = require("../bd/mongodb.conexion").mongoose;
var Schema = mongoose.Schema;

var ExperimentoSchema = new Schema({
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

module.exports = mongoose.model("Experimento", ExperimentoSchema);
