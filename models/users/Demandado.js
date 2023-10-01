import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Sexo } from "../other/Sexo.js";
import { Expediente } from "../forms/Expediente.js";

export const Demandado = sequelize.define(
    "Demandado", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombreCompleto: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

Demandado .belongsTo(Sexo, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Sexo .hasMany(Demandado, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Demandado .belongsTo(Expediente, {
    foreignKey: "expedienteId",
    sourceKey: "id"
})

Expediente .hasMany(Demandado, {
    foreignKey: "expedienteId",
    sourceKey: "id"
})