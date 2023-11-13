import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Sexo } from "../other/Sexo.js";
import { Expediente } from "../forms/Expediente.js";

export const PersonaNatural = sequelize.define(
    "PersonaNatural", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
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
        dni:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        correo: {
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

PersonaNatural .belongsTo(Sexo, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Sexo .hasMany(PersonaNatural, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

PersonaNatural .belongsTo(Expediente, {
    foreignKey: "expedienteId",
    sourceKey: "id"
})

Expediente .hasMany(PersonaNatural, {
    foreignKey: "expedienteId",
    sourceKey: "id"
})