import { Op } from "sequelize";

import { FormRENIEC } from "../../models/forms/FormReniec.js";
import { FormSUNARP } from "../../models/forms/FormSunarp.js";
import { FormMINTRABAJO } from "../../models/forms/FormMinTrabajo.js";

export class ExpedientController {

    static async searchExpedient(dniUser) {
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
            return expediente;
        }
        else {
            return null;
        }
    }
}