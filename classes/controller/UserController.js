import { Op } from "sequelize";

import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { Demandado } from "../../models/users/Demandado.js";
import { TypeUserController } from "./TypeUserController.js";
import { ExpedientController } from "./ExpedientController.js";
import { capitalizeFirstLetter } from "../../utils/Functions.js";
import { Secretario } from "../../models/users/Secretario.js";

export class UserController {

    async createUser(NaturalPerson) {
        // Ver si existe un usuario igual
        const checkPerson = await PersonaNatural.findOne({
            where: {
                [Op.or]: [
                    { username: NaturalPerson.username },
                    { dni: NaturalPerson.dni },
                    { correo: NaturalPerson.email }
                ]
            }
        });

        const checkJudge = await Juez.findOne({
            where: {
                [Op.or]: [
                    { username: NaturalPerson.username },
                    { dni: NaturalPerson.dni },
                    { correo: NaturalPerson.email }
                ]
            }
        });

        const checkSecretary = await Secretario.findOne({
            where: {
                [Op.or]: [
                    { username: NaturalPerson.username },
                    { dni: NaturalPerson.dni },
                    { correo: NaturalPerson.email }
                ]
            }
        });

        if (checkPerson.length == 0 && checkJudge.length == 0 && checkSecretary.length == 0) {
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

    async createDefendant(defendantDNI) {
        // Ver si existe un usuario igual
        const checkDef = await Demandado.findOne({
            where: {
                dni: defendantDNI
            }
        });

        if (!checkDef) {
            const maxIdResultUser = await Demandado.max("id");
            const nextIdUser = (maxIdResultUser || 0) + 1; // Calcula el próximo ID

            // Buscar expediente con el dni del demandado
            let exControl = new ExpedientController();
            let defExpedient = await exControl.searchExpedient(defendantDNI);

            if (defExpedient) {
                let defRENIEC = defExpedient.FormRENIEC;

                const newDef = await Demandado.create({
                    id: nextIdUser,
                    nombres: defRENIEC.nombres,
                    apellidos: defRENIEC.apellidos,
                    nombreCompleto: defRENIEC.nombres + " " + defRENIEC.apellidos,
                    dni: defendantDNI,
                    direccion: defRENIEC.direccion,
                    sexoId: defRENIEC.sexoId,
                    expedienteId: defExpedient.id
                });

                // Y retorna el id del nuevo demandado
                return newDef.id;
            }
            else {
                return null;
            }
        }
        else {
            return checkDef.id;
        }

    }

    async searchUser(_type, _username, _password) {
        // Intenta buscar el usuario en la tabla PersonaNatural
        let typeControl = new TypeUserController();

        if (_type == 0) {
            const search = await typeControl.searchForNPUser(_username, _password);
            return search;
        }
        else if (_type == 1) {
            const search = await typeControl.searchForJudgeUser(_username, _password);
            return search;
        }
        else {
            const search = await typeControl.searchForSecretaryUser(_username, _password);
            return search;
        }

        return null;
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

    async modifyUserSecretary(updatedFields) {
        const secre = await Secretario.findOne({
            where: {
                id: {
                    [Op.eq]: updatedFields.id
                }
            }
        });

        let changes = 0;
        // Actualiza los campos si no son nulos en updatedFields
        if (updatedFields.password !== null && updatedFields.password !== secre.password) {
            secre.password = updatedFields.password;
        }
        if (updatedFields.nombres !== null && updatedFields.nombres !== secre.nombres) {
            secre.nombres = capitalizeFirstLetter(updatedFields.nombres);
            changes++;
        }
        if (updatedFields.apellidos !== null && updatedFields.apellidos !== secre.apellidos) {
            secre.apellidos = capitalizeFirstLetter(updatedFields.apellidos);
            changes++;
        }
        if (changes >= 1) {
            secre.nombreCompleto = secre.nombres + " " + secre.apellidos;
        }
        if (updatedFields.correo !== null && updatedFields.correo !== secre.correo) {
            secre.correo = updatedFields.correo;
        }
        if (updatedFields.sexoId !== null && updatedFields.sexoId !== secre.sexoId) {
            secre.sexoId = updatedFields.sexoId;
        }
        if (updatedFields.juzgadoId !== null && updatedFields.juzgadoId !== secre.juzgadoId) {
            secre.juzgadoId = updatedFields.juzgadoId;
        }

        await secre.save();

        if (secre) {
            return secre;
        }
        else {
            return null;
        }
    }
}