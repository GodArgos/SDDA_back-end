import { Sequelize } from "sequelize";
<<<<<<< Updated upstream
                                    //nombre bd   usuario  contra
export const sequelize = new Sequelize("SDDA", "postgres", "postgres", {
=======
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});




/*export const sequelize = new Sequelize("SDDA", "postgres", "postgres", {
>>>>>>> Stashed changes
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