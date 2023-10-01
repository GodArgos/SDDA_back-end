import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Sexo } from "../other/Sexo.js";
import { EstadoCivil } from "../other/EstadoCivil.js";
import { GradoInstruccion } from "../other/GradoInstruccion.js";

export const FormRENIEC = sequelize.define(
    "FormRENIEC", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.INTEGER,
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
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

FormRENIEC .belongsTo(Sexo, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

Sexo .hasMany(FormRENIEC, {
    foreignKey: "sexoId",
    sourceKey: "id"
})

FormRENIEC .belongsTo(EstadoCivil, {
    foreignKey: "estadocivilId",
    sourceKey: "id"
})

EstadoCivil .hasMany(FormRENIEC, {
    foreignKey: "estadoCivilId",
    sourceKey: "id"
})

FormRENIEC .belongsTo(GradoInstruccion, {
    foreignKey: "gradoInstruccionId",
    sourceKey: "id"
})

GradoInstruccion .hasMany(FormRENIEC, {
    foreignKey: "gradoInstruccionId",
    sourceKey: "id"
})