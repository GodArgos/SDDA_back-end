import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Juez } from "../users/Juez.js";
import { PersonaNatural } from "../users/PersonaNatural.js";
import { Demandado } from "../users/Demandado.js";
import { EstadoDemanda } from "../other/EstadoDemanda.js";
import { FormularioIngreso } from "./FormularioIngreso.js";

export const Demanda = sequelize.define(
    "Demanda", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nro_demanda: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        fecha_emision: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_audiencia: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

Demanda .belongsTo(Juez, {
    foreignKey: "juezId",
    sourceKey: "id"
})

Juez .hasMany(Demanda, {
    foreignKey: "juezId",
    sourceKey: "id"
})

Demanda .belongsTo(PersonaNatural, {
    foreignKey: "personaNaturalId",
    sourceKey: "id"
})

PersonaNatural .hasMany(Demanda, {
    foreignKey: "personaNaturalId",
    sourceKey: "id"
})

Demanda .belongsTo(Demandado, {
    foreignKey: "demandadoId",
    sourceKey: "id"
})

Demandado .hasMany(Demanda, {
    foreignKey: "demandadoId",
    sourceKey: "id"
})

Demanda .belongsTo(EstadoDemanda, {
    foreignKey: "estadoDemandaId",
    sourceKey: "id"
})

EstadoDemanda .hasMany(Demanda, {
    foreignKey: "estadoDemandaId",
    sourceKey: "id"
})

Demanda .belongsTo(FormularioIngreso, {
    foreignKey: "formularioId",
    sourceKey: "id"
})

FormularioIngreso .hasMany(Demanda, {
    foreignKey: "formularioId",
    sourceKey: "id"
})