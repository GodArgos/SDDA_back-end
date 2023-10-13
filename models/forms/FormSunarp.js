import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const FormSUNARP = sequelize.define(
    "FormSUNARP", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nro_propiedades: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nro_vehiculos: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)