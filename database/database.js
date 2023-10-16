import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});




/*export const sequelize = new Sequelize("SDDA", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres"
})*/

/*export const sequelize = new Sequelize(
    process.env.DATABASE_URL,{
        dialectOptions: {
            ssl:{
                require: true,
                rejectUnauthorized : false
            }
        }
    }
)*/