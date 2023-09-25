import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Juzgado = sequelize.define(
    "Juzgado", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        direccionJuzgado: {
            type: DataTypes.STRING
        }

    },
    {
        freezeTableName: true,
        timestamps: false
    }
)