import { Op } from "sequelize";

import { Expediente } from "../../models/forms/Expediente.js";
import { FormRENIEC } from "../../models/forms/FormReniec.js";
import { FormSUNARP } from "../../models/forms/FormSunarp.js";
import { FormMINTRABAJO } from "../../models/forms/FormMinTrabajo.js";

export class ExpedientController {

    async searchExpedient(dniUser) {
        const expediente = await Expediente.findOne({
            where: {
                dni: {
                    [Op.eq]: dniUser
                }
            },
            include: [
                { model: FormRENIEC },
                { model: FormSUNARP },
                { model: FormMINTRABAJO }
            ]
        });

        if (expediente) {
            console.log(expediente)
            return expediente;
        }
        else {
            return null;
        }
    }
}