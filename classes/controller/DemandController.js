import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { Demandado } from "../../models/users/Demandado.js";
import { Defendant } from "../model/Defendant.js";
import { EstadoDemanda } from "../../models/other/EstadoDemanda.js";
import { FormularioIngreso } from "../../models/forms/FormularioIngreso.js";
import { UserController } from "./UserController.js";
import { Demanda } from "../../models/forms/Demanda.js";
import { getActualDate } from "../../utils/Functions.js";


export class DemandController {

    async getDemand(demandId) {
        const demanda = await Demanda.findByPk(demandId, {
            include: [
                { model: Juez },
                { model: PersonaNatural },
                { model: Demandado },
                { model: EstadoDemanda },
                { model: FormularioIngreso }
            ]
        });

        if (demanda) {
            return demanda;
        }
        else {
            return null;
        }
    }

    async getAllDemands() {
        const demandas = await Demanda.findAll({
            include: [
                { model: Juez },
                { model: PersonaNatural },
                { model: Demandado },
                { model: EstadoDemanda },
                { model: FormularioIngreso }
            ]
        });

        if (demandas) {
            return demandas;
        }
        else {
            return null;
        }
    }

    async createDemand(fields) {
        try {
            const def = new Defendant(
                fields.def_dni,
                fields.def_names,
                fields.def_lastnames,
                fields.def_address,
                fields.def_sexId
            );
    
            let userControl = new UserController();
            const defId = await userControl.createDefendant(def);
    
            if (defId) {
                const maxIdResultUser = await Demanda.max("id");
                const nextIdUser = (maxIdResultUser || 0) + 1; // Calcula el próximo ID
    
                let date = getActualDate();
    
                await Demanda.create({
                    id: nextIdUser,
                    nro_demanda: nextIdUser,
                    fecha_emision: date,
                    descripcion: fields.dem_descrip,
                    juezId: fields.juez_id,
                    personaNaturalId: fields.persona_id,
                    demandadoId: defId,
                    estadoDemandaId: 2,
                    formularioId: fields.form_id
                });

                const form = await FormularioIngreso.findByPk(fields.form_id);
                form.estado = 1;
                await form.save;
    
                return 200;
            } else {
                throw new Error("No se pudo crear el Demandado");
            }
        } catch (error) {
            console.error("Error al crear demanda:", error.message);
            return 404; // o puedes retornar el mensaje de error si lo prefieres
        }
    }
}