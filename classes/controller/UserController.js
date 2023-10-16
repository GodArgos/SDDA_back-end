import { Op } from "sequelize";

import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { TypeUserController } from "./TypeUserController.js";
import { ExpedientController } from "./ExpedientController.js";

export class UserController {

    static async createUser(NaturalPerson) {
        // Ver si existe un usuario igual
        const checkPerson = await PersonaNatural.findAll({
            where: {
                [Op.or]: [
                    { username: NaturalPerson.username },
                    { dni: NaturalPerson.dni },
                    { correo: NaturalPerson.email }
                ]
            }
        });

        const checkJudge = await Juez.findAll({
            where: {
                [Op.or]: [
                    { username: NaturalPerson.username },
                    { dni: NaturalPerson.dni },
                    { correo: NaturalPerson.email }
                ]
            }
        });

        if (checkPerson.length == 0 && checkJudge.length == 0) {
            const maxIdResultUser = await PersonaNatural.max("id");
            const nextIdUser = (maxIdResultUser || 0) + 1; // Calcula el próximo ID

            // Buscar expediente con el dni del usuario
            let exControl = new ExpedientController();
            let userExpedient = exControl.searchExpedient(NaturalPerson.dni);

            // Si encuentra el expediente crea al usuario
            if (userExpedient) {
                const newUser = await PersonaNatural.create({
                    id: nextIdUser,
                    username: NaturalPerson.username,
                    password: NaturalPerson.password,
                    nombres: NaturalPerson.names,
                    apellidos: NaturalPerson.lastnames,
                    nombreCompleto: NaturalPerson.fullname,
                    dni: NaturalPerson.dni,
                    correo: NaturalPerson.email,
                    direccion: NaturalPerson.address,
                    sexoId: NaturalPerson.sex,
                    expedienteId: userExpedient.id
                });

                // Y retorna 1
                return 200;
            }
            // Si no encuentra un expediente con el dni del usuario
            else {
                return 404;
            }
        }
        else {
            return 404;
        }
    }

    static async searchUser(_username, _password) {
        // Intenta buscar el usuario en la tabla PersonaNatural
        let typeControl = TypeUserController();
        const personaNatural = typeControl.searchForNPUser(_username, _password);
        const juez = typeControl.searchForJudgeUser(_username, _password);

        if (personaNatural && !juez) {
            return personaNatural;
        }
        else if (juez && !personaNatural) {
            return juez;
        }
        else {
            return null;
        }
    }

    static async modifyUser(updatedFields) {
        let typeControl = TypeUserController();
        const personaNatural = typeControl.searchForNPUser(updatedFields.username, updatedFields.password);
        const juez = typeControl.searchForJudgeUser(updatedFields.username, updatedFields.password);

        if (personaNatural) {
            await PersonaNatural.update(updatedFields, {
                fields: Object.keys(updatedFields).filter((field) => updatedFields[field] !== null)
            });
            return personaNatural;
        }
        else if (juez) {
            await Juez.update(updatedFields, {
                fields: Object.keys(updatedFields).filter((field) => updatedFields[field] !== null)
            });
            return juez;
        }
        else {
            return null;
        }
    }
}