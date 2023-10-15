import { Op } from "sequelize";

import { FormRENIEC } from "../../models/forms/FormReniec";
import { FormSUNARP } from "../../models/forms/FormSunarp";
import { FormMINTRABAJO } from "../../models/forms/FormMinTrabajo";

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