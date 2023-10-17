import { Op } from "sequelize";

import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { TypeUserController } from "./TypeUserController.js";
import { ExpedientController } from "./ExpedientController.js";
import { capitalizeFirstLetter } from "../../utils/Functions.js";

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
                    nombreCompleto: NaturalPerson.names + " " + NaturalPerson.lastnames,
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

    async modifyUserPerson(updatedFields) {
        const personaNatural = await PersonaNatural.findOne({
            where: {
                id: {
                    [Op.eq]: updatedFields.id
                }
            }
        });

        let changes = 0;

        // Actualiza los campos si no son nulos en updatedFields
        if (updatedFields.username !==  null && updatedFields.username !== personaNatural.username) {
            personaNatural.username = updatedFields.username;
        }
        if (updatedFields.password !== null && updatedFields.password !== personaNatural.password) {
            personaNatural.password = updatedFields.password;
        }
        if (updatedFields.nombres !== null && updatedFields.nombres !== personaNatural.nombres) {
            personaNatural.nombres = capitalizeFirstLetter(updatedFields.nombres);
            changes++;
        }
        if (updatedFields.apellidos !== null && updatedFields.apellidos !== personaNatural.apellidos) {
            personaNatural.apellidos = capitalizeFirstLetter(updatedFields.apellidos);
            changes++;
        }
        if (changes >= 1) {
            personaNatural.nombreCompleto = personaNatural.nombres + " " + personaNatural.apellidos;
        }
        if (updatedFields.dni !== null && updatedFields.dni !== personaNatural.dni) {
            personaNatural.dni = updatedFields.dni;
        }
        if (updatedFields.correo !== null && updatedFields.correo !== personaNatural.correo) {
            personaNatural.correo = updatedFields.correo;
        }
        if (updatedFields.sexoId !== null && updatedFields.sexoId !== personaNatural.sexoId) {
            personaNatural.sexoId = updatedFields.sexoId;
        }

        await personaNatural.save();

        if (personaNatural) {
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

        let changes = 0;
        // Actualiza los campos si no son nulos en updatedFields
        if (updatedFields.username !==  null && updatedFields.username !== juez.username) {
            juez.username = updatedFields.username;
        }
        if (updatedFields.password !== null && updatedFields.password !== juez.password) {
            juez.password = updatedFields.password;
        }
        if (updatedFields.nombres !== null && updatedFields.nombres !== juez.nombres) {
            juez.nombres = capitalizeFirstLetter(updatedFields.nombres);
            changes++;
        }
        if (updatedFields.apellidos !== null && updatedFields.apellidos !== juez.apellidos) {
            juez.apellidos = capitalizeFirstLetter(updatedFields.apellidos);
            changes++;
        }
        if (changes >= 1) {
            juez.nombreCompleto = juez.nombres + " " + juez.apellidos;
        }
        if (updatedFields.dni !== null && updatedFields.dni !== juez.dni) {
            juez.dni = updatedFields.dni;
        }
        if (updatedFields.correo !== null && updatedFields.correo !== juez.correo) {
            juez.correo = updatedFields.correo;
        }
        if (updatedFields.sexoId !== null && updatedFields.sexoId !== juez.sexoId) {
            juez.sexoId = updatedFields.sexoId;
        }
        if (updatedFields.juzgadoId !== null && updatedFields.juzgadoId !== juez.juzgadoId) {
            juez.juzgadoId = updatedFields.juzgadoId;
        }
        
        await juez.save();

        if (juez) {
            return juez;
        }
        else {
            return null;
        }
    }
}