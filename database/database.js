import { Sequelize } from "sequelize";
                                    //nombre bd   usuario  contra
export const sequelize = new Sequelize("SDDA", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres"
})

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