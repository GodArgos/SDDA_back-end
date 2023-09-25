import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Sexo } from "./Sexo";
import { Expediente } from "./Expediente.js";

export const PersonaNatural = sequelize.define(
    "PersonaNatural", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellidoPaterno: {
            type: DataTypes.STRING
        },
        apellidoMaterno: {
            type: DataTypes.STRING
        },
        direccion: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

PersonaNatural .belongsTo(Sexo, {
    foreignKey: "sexodId",
    sourceKey : "id"
})

Sexo .hasMany(PersonaNatural, {
    foreignKey: "sexodId",
    sourceKey : "id"
})

PersonaNatural .belongsTo(Expediente, {
    foreignKey: "expedienteId",
    sourceKey : "id"
})

Expediente .hasMany(PersonaNatural, {
    foreignKey: "expedienteId",
    sourceKey : "id"
})