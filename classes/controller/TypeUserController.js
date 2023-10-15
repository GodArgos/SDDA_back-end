import { Op } from "sequelize";

import { PersonaNatural } from "../../models/users/PersonaNatural.js";
import { Juez } from "../../models/users/Juez.js";

export class TypeUserController {
    static async searchForNPUser(_username, _password) {
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
            return personaNatural;
        }
        else {
            return null;
        }
    }

    static async searchForJudgeUser(_username, _password) {
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
            return juez;
        } else {
            return null;
        }
    }
}