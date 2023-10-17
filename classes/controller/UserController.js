import { Op } from "sequelize";

import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { TypeUserController } from "./TypeUserController.js";
import { ExpedientController } from "./ExpedientController.js";

export class UserController {

    async createUser(NaturalPerson) {
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
            let userExpedient = await exControl.searchExpedient(NaturalPerson.dni);

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

    async searchUser(_username, _password) {
        // Intenta buscar el usuario en la tabla PersonaNatural
        let typeControl = new TypeUserController();
        const personaNatural = await typeControl.searchForNPUser(_username, _password);
        const juez = await typeControl.searchForJudgeUser(_username, _password);

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

    async modifyUserPerson(updatedFields){
        const personaNatural = await PersonaNatural.findOne({
            where: {
                id: {
                    [Op.eq]: updatedFields.id
                }
            }
        });

        if (personaNatural) {
            await PersonaNatural.update(updatedFields, {
                fields: Object.keys(updatedFields).filter((field) => updatedFields[field] !== null)
            });
            return personaNatural;
        }
        else {
            return null;
        }
    }

    async modifyUserJudge(updatedFields) {
        const juez = await Juez.findOne({
            where: {
                id: {
                    [Op.eq]: updatedFields.id
                }
            }
        });

        if (juez) {
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