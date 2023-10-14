import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const FormMINTRABAJO = sequelize.define(
    "FormMINTRABAJO", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_lugar_trabajo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ruc_lugar_trabajo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        monto_ingreso: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)