import { FormularioIngreso } from "../../models/forms/FormularioIngreso.js";
import { PersonaNatural } from "../../models/users/PersonaNatural.js";

export class DemandRequestController {

    static async getAllDemandReq() {
        const entries = await FormularioIngreso.findAll({
            include: [PersonaNatural], // Incluye la tabla relacionada PersonaNatural
        });
        
        if (entries) {
            return entries;
        }
        else {
            return null;
        }
    }

    static async getDemandReq(reqid) {
        const entry = await FormularioIngreso.findByPk(reqid, {
            include: [PersonaNatural], // Incluye la tabla relacionada PersonaNatural
        });

        if (entry) {
            return entry;
        }
        else {
            return null;
        }
    }

    static async deleteDemandReq(reqid) {
        const formularioIngreso = await FormularioIngreso.findByPk(reqid);

        if (!formularioIngreso) {
            return 404;
        }

        // Eliminar la entrada
        await formularioIngreso.destroy();
        return 200;
    }
}