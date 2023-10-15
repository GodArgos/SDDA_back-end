import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { Demandado } from "../../models/users/Demandado.js";
import { EstadoDemanda } from "../../models/other/EstadoDemanda.js";
import { FormularioIngreso } from "../../models/forms/FormularioIngreso.js";

export class DemandController {

    static async getDemand(demandId) {
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

    static async getAllDemands() {
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


}