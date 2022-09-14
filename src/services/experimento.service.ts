import { Experimento } from '../models/experimento.model';

export const getExperimentos = async(query: any) => {
    try {
        return await Experimento.find(query).sort({ "fecha_entrada": -1 });
	} catch (err) {
        throw Error("Error al paginar los experimenentos. Err(EXP01): " + err);
	}
};

export const getOneExperimento = async (id: string) => {
	try {
		return await Experimento.findById(id);
	} catch (err) {
        throw Error("Err. 2.Error al buscar el experimenento. Err(EXP02): " + err);
	}
};

export const createExperimento = async (experimento: any) => {
    const nuevoExperimento = new Experimento({
        espectrometro: experimento.espectrometro,
        fecha_entrada: experimento.fecha_entrada,
        fecha_salida: experimento.fecha_salida,
        usuario_entrada: experimento.usuario_entrada,
        usuario_salida: experimento.usuario_salida,
        muestra: experimento.muestra,
        solicitud: experimento.solicitud,
        sonda: experimento.sonda,
        nucleo: experimento.nucleo,
        completo: experimento.completo,
        visible: experimento.visible,
    });

	try {
		return await nuevoExperimento.save();
	} catch (e) {
		throw Error("Error al crear el experimento. Err(EXP03): " + e);
    }
};

export const updateExperimento = async (experimento: any) => {
    const id = experimento.id;
    const oldExperimento = await Experimento.findById(id);

	// If no old Todo Object exists return false
	if (!oldExperimento) {
		return false;
	}

	oldExperimento.espectrometro = experimento.espectrometro;
	oldExperimento.fecha_entrada = experimento.fecha_entrada;
	oldExperimento.fecha_salida = experimento.fecha_salida;
	oldExperimento.usuario_entrada = experimento.usuario_entrada;
	oldExperimento.usuario_salida = experimento.usuario_salida;
	oldExperimento.muestra = experimento.muestra;
	oldExperimento.solicitud = experimento.solicitud;
	oldExperimento.sonda = experimento.sonda;
	oldExperimento.nucleo = experimento.nucleo;
	oldExperimento.completo = experimento.completo;
	oldExperimento.visible = experimento.visible;
 
	try {
		return await oldExperimento.save();
	} catch (e) {
		throw Error("Error al actualizar el experimento. Err(EXP04-2): " + e);
    }
};

export const deleteExperimento = async (id: string) => {
	try {
        return await Experimento.deleteOne({ _id: id });
	} catch (err) {
        throw Error("Ocurrio un error mientras se eliminaba el experimento. ErrErr(EXP05).: " + err);
	}
};
