import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { PersonaNatural } from "../users/PersonaNatural.js";
import { EstadoDemanda } from "../other/EstadoDemanda.js";

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
        },
        fecha_emision: {
            type: DataTypes.STRING,
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

FormularioIngreso .belongsTo(EstadoDemanda, {
    foreignKey: "estadoDemandaId",
    sourceKey: "id"
})

EstadoDemanda .hasMany(FormularioIngreso, {
    foreignKey: "estadoDemandaId",
    sourceKey: "id"
})