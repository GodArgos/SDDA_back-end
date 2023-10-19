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
        const def = new Defendant(
            fields.def_dni,
            fields.def_names,
            fields.def_lastnames,
            fields.def_address,
            fields.def_sexId
        )

        let userControl = new UserController();
        const defId = await userControl.createDefendant(def);
        //console.log(defId);

        if (!defId) {
            const maxIdResultUser = await Demanda.max("id");
            const nextIdUser = (maxIdResultUser || 0) + 1; // Calcula el próximo ID

            let date = getActualDate();

            const newDemanda = await Demanda.create({
                id: nextIdUser,
                nro_demanda: nextIdUser,
                fecha_emision: date,
                descripcion: fields.dem_descrip,
                juezId: fields.juez_id,
                personaNaturalId: fields.persona_id,
                demandadoId: defId,
                estadoDemandaId: 2,
                formularioId: fields.form_id
            })

            return 200;
        }
        else {
            return 404;
        }

    }
}