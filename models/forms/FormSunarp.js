import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const FormSUNARP = sequelize.define(
    "FormSUNARP", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nro_propiedades: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nro_vehiculos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        observaciones: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)