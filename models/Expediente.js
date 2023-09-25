import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Expediente = sequelize.define(
    "Expediente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nroExpediente: {
            type: DataTypes.STRING
        },
        observacionExpediente: {
            type: DataTypes.STRING
        },
        listaDocumentos: {
            type: DataTypes.INTEGER
        }

    },
    {
        freezeTableName: true,
        timestamps: false
    }
)