export class ExpedientController {
    static async searchExpedient(dniUser) {
        const userExpedient = await Expediente.findOne({
            where: {
                dni: dniUser
            }
        });

        if (userExpedient) {
            return userExpedient;
        }
        else{
            return null;
        }
    }
}