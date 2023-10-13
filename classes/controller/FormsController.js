import { FormRENIEC } from "../../models/forms/FormReniec";
import { FormSUNARP } from "../../models/forms/FormSunarp";
import { FormMINTRABAJO } from "../../models/forms/FormMinTrabajo";

class FormsController {
    static async searchRENIEC(dniUser) {
        // Buscar formulario de RENIEC que tenga el mismo dni que se ha recibido
        const form = await FormRENIEC.findOne({
            where: {
                dni: dniUser
            }
        });

        // Se encontró formulario
        if (form) {
            // Retornar id del formulario
            return form.id;
        }
        else {
            return null;
        }
    }

    static async searchFormSunarp() {
        // Buscar formulario de RENIEC que tenga el mismo dni que se ha recibido
        const form = await FormSUNARP.findOne({
            where: {
                dni: dniUser
            }
        });

        // Se encontró formulario
        if (form) {
            // Retornar id del formulario
            return form.id;
        }
        else {
            return null;
        }
    }

    static async searchFormMinTrabajo() {
        // Buscar formulario de RENIEC que tenga el mismo dni que se ha recibido
        const form = await FormMINTRABAJO.findOne({
            where: {
                dni: dniUser
            }
        });

        // Se encontró formulario
        if (form) {
            // Retornar id del formulario
            return form.id;
        }
        else {
            return null;
        }
    }
}