import { Op } from "sequelize";

import { FormRENIEC } from "../../models/forms/FormReniec.js";
import { FormSUNARP } from "../../models/forms/FormSunarp.js";
import { FormMINTRABAJO } from "../../models/forms/FormMinTrabajo.js";

export class ExpedientController {

    async searchExpedient(dniUser) {
        console.log("Hola")
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
        console.log(expediente)
        console.log("Hola")
        if (expediente) {
            console.log(expediente)
            return expediente;
        }
        else {
            return null;
        }
    }
}