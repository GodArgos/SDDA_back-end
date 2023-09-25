import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Juez } from "./Juez.js";
import { PersonaNatural } from "./PersonaNatural.js";
import { Demandado } from "./Demandado.js";

export const Demanda = sequelize.define(
    "Demanda", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nroSolicitud: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        fechaEmision: {
            type: DataTypes.DATEONLY
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

Demanda .belongsTo(Juez, {
    foreignKey: "juezId",
    sourceKey : "id"
})

Juez .hasMany(Demanda, {
    foreignKey: "juezId",
    sourceKey : "id"
})

Demanda .belongsTo(PersonaNatural, {
    foreignKey: "personaNatuId",
    sourceKey : "id"
})

PersonaNatural .hasMany(Demanda, {
    foreignKey: "personaNatuId",
    sourceKey : "id"
})

Demanda .belongsTo(Demandado, {
    foreignKey: "demandadoId",
    sourceKey : "id"
})

Demandado .hasMany(Demanda, {
    foreignKey: "demandadoId",
    sourceKey : "id"
})