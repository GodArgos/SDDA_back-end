import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Sexo } from "../other/Sexo.js";
import { Juzgado } from "../other/Juzgado.js";

export const Juez = sequelize.define(
    "Juez", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        nro_colegiatura: {
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

Juez .belongsTo(Sexo, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Sexo .hasMany(Juez, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Juez .belongsTo(Juzgado, {
    foreignKey: "juzgadoId",
    sourceKey: "id"
})

Juzgado .hasMany(Juez, {
    foreignKey: "juzgadoId",
    sourceKey: "id"
})