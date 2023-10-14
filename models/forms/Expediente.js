import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

// Foreign Keys
import { FormRENIEC } from "./FormReniec.js";
import { FormSUNARP } from "./FormSunarp.js";
import { FormMINTRABAJO } from "./FormMinTrabajo.js";

export const Expediente = sequelize.define(
    "Expediente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nro_expediente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

Expediente .belongsTo(FormRENIEC, {
    foreignKey: "formReniecId",
    sourceKey: "id"
})

FormRENIEC .hasMany(Expediente, {
    foreignKey: "formReniecId",
    sourceKey: "id"
})

Expediente .belongsTo(FormSUNARP, {
    foreignKey: "formSunarpId",
    sourceKey: "id"
})

FormSUNARP .hasMany(Expediente, {
    foreignKey: "formSunarpId",
    sourceKey: "id"
})

Expediente .belongsTo(FormMINTRABAJO, {
    foreignKey: "formMinTrabajoId",
    sourceKey: "id"
})

FormMINTRABAJO .hasMany(Expediente, {
    foreignKey: "formMinTrabajoId",
    sourceKey: "id"
})