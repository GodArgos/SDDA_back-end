import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Sexo } from "./Sexo";
import { Juzgado } from "./Juzgado.js";

export const Juez = sequelize.define(
    "Juez", {
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
        nroColegiatura: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

Juez .belongsTo(Sexo, {
    foreignKey: "sexodId",
    sourceKey : "id"
})

Sexo .hasMany(Juez, {
    foreignKey: "sexodId",
    sourceKey : "id"
})

Juez .belongsTo(Juzgado, {
    foreignKey: "juzgadoId",
    sourceKey : "id"
})

Juzgado .hasMany(Juez, {
    foreignKey: "juzgadoId",
    sourceKey : "id"
})