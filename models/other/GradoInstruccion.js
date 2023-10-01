import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const GradoInstruccion = sequelize.define(
    "GradoInstruccion", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)