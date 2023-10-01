import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { Juez } from "../users/Juez.js";
import { PersonaNatural } from "../users/PersonaNatural.js";
import { Demandado } from "../users/Demandado.js";
import { EstadoDemanda } from "../other/EstadoDemanda.js";

export const Demanda = sequelize.define(
    "Demanda", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nro_solicitud: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        fecha_emision: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.INTEGER
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