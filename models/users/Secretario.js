import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Sexo } from "../other/Sexo.js";
import { Juzgado } from "../other/Juzgado.js";
import { Juez } from "./Juez.js";

export const Secretario = sequelize.define(
    "Secretario", {
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

Secretario .belongsTo(Sexo, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Sexo .hasMany(Secretario, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Secretario .belongsTo(Juzgado, {
    foreignKey: "juzgadoId",
    sourceKey: "id"
})

Juzgado .hasMany(Secretario, {
    foreignKey: "juzgadoId",
    sourceKey: "id"
})

Secretario .belongsTo(Juez, {
    foreignKey: "juezId",
    sourceKey: "id"
})

Juez .hasMany(Secretario, {
    foreignKey: "juezId",
    sourceKey: "id"
})