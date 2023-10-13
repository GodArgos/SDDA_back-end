import { PersonaNatural } from "../../models/users/PersonaNatural";
import { sequelize } from '../../database/database.js';

class UserController {

    static async createUser(NaturalPerson) {
        // Ver si existe un usuario igual
        const checUser = await PersonaNatural.findAll({
            where: {
                [Op.or]: [
                    { username: NaturalPerson.username },
                    { dni: NaturalPerson.dni },
                    { correo: NaturalPerson.email }
                ]
            }
        });

        if (checUser.length == 0) {
            const maxIdResultUser = await PersonaNatural.max("id");
            const nextIdUser = (maxIdResultUser || 0) + 1; // Calcula el próximo ID

            // Buscar expediente


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
                sexoId: NaturalPerson.sex
            });
        }
    }
}