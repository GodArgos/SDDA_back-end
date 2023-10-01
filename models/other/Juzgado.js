import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database";

export const Juzgado = sequelize.define(
    "Juzgado", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        direccion: {
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