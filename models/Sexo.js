import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Sexo = sequelize.define(
    "Sexo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreSexo: {
            type: DataTypes.STRING
        }

    },
    {
        freezeTableName: true,
        timestamps: false
    }
)