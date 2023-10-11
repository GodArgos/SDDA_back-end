import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { PersonaNatural } from "../users/PersonaNatural.js";

export const FormularioIngreso = sequelize.define(
    "FormularioIngreso", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nro_solicitud: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        fecha_emision: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        pdf_path: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

FormularioIngreso .belongsTo(PersonaNatural, {
    foreignKey: "personaNaturalId",
    sourceKey: "id"
})

PersonaNatural .hasMany(FormularioIngreso, {
    foreignKey: "personaNaturalId",
    sourceKey: "id"
})