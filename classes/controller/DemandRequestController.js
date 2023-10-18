import { Op } from "sequelize";

import { FormularioIngreso } from "../../models/forms/FormularioIngreso.js";
import { PersonaNatural } from "../../models/users/PersonaNatural.js";

export class DemandRequestController {

    async getAllDemandReq() {
        const entries = await FormularioIngreso.findAll({
            include: [
                { model: PersonaNatural }
            ], // Incluye la tabla relacionada PersonaNatural
        });
        
        if (entries) {
            return entries;
        }
        else {
            return null;
        }
    }

    async getDemandReq(reqid) {
        const entry = await FormularioIngreso.findByPk(reqid, {
            include: [
                { model: PersonaNatural }
            ], // Incluye la tabla relacionada PersonaNatural
        });

        if (entry) {
            return entry;
        }
        else {
            return null;
        }
    }

    async deleteDemandReq(reqid) {
        const formularioIngreso = await FormularioIngreso.findByPk(reqid);

        if (!formularioIngreso) {
            return 404;
        }

        // Eliminar la entrada
        await formularioIngreso.destroy();
        return 200;
    }


    async getPDFLinkByPersonaNaturalId(pnatid) {
        try {
            // Buscar el formulario basado en el ID de la persona natural
            const formulario = await FormularioIngreso.findOne({
                where: {
                    personaNaturalId: {
                        [Op.eq]: pnatid
                    }
                }
            });

            if (formulario) {
                return formulario.pdf_path;
            } else {
                throw new Error('No se encontró el formulario para el ID de persona natural proporcionado.');
            }

        } catch (e) {
            throw e;
        }
    }



}