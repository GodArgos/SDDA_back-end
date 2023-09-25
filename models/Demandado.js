import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Sexo } from "./Sexo";
import { Expediente } from "./Expediente.js";

export const Demandado = sequelize.define(
    "Demandado", {
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

Demandado .belongsTo(Sexo, {
    foreignKey: "sexodId",
    sourceKey : "id"
})

Sexo .hasMany(Demandado, {
    foreignKey: "sexodId",
    sourceKey : "id"
})

Demandado .belongsTo(Expediente, {
    foreignKey: "expedienteId",
    sourceKey : "id"
})

Expediente .hasMany(Demandado, {
    foreignKey: "expedienteId",
    sourceKey : "id"
})