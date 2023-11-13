import { Op } from "sequelize";

import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";
import { Juzgado } from "../../models/other/Juzgado.js";
import { Sexo } from "../../models/other/Sexo.js";
import { Secretario } from "../../models/users/Secretario.js";

export class TypeUserController {
    async searchForNPUser(_username, _password) {
        const personaNatural = await PersonaNatural.findOne({
            where: {
                username: {
                    [Op.eq]: _username
                },
                password: {
                    [Op.eq]: _password
                }
            },
            include: [
                { model: Sexo }
            ]
        });

        if (personaNatural) {
            return {
                ...personaNatural.toJSON(),
                nombreSexo: personaNatural.Sexo.nombre,
            };
        }
        else {
            return null;
        }
    }

    async searchForJudgeUser(_username, _password) {
        const juez = await Juez.findOne({
            where: {
                username: {
                    [Op.eq]: _username
                },
                password: {
                    [Op.eq]: _password
                }
            },
            include: [
                { model: Sexo },
                { model: Juzgado }
            ]
        });

        if (juez) {
            return {
                ...juez.toJSON(),
                nombreSexo: juez.Sexo.nombre,
                direccionJuzgado: juez.Juzgado.direccion
            };
        } else {
            return null;
        }
    }

    async searchForSecretaryUser(_username, _password) {
        const secre = await Secretario.findOne({
            where: {
                username: {
                    [Op.eq]: _username
                },
                password: {
                    [Op.eq]: _password
                }
            },
            include: [
                { model: Sexo },
                { model: Juzgado }
            ]
        });

        if (secre) {
            return {
                ...secre.toJSON(),
                nombreSexo: secre.Sexo.nombre,
                direccionJuzgado: secre.Juzgado.direccion
            };
        } else {
            return null;
        }
    }
}