import { sequelize } from "./database/database.js";
import express from "express";
import cors from "cors";

const app = express()
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json())

async function verificarConexion() {
    try {
        await sequelize.authenticate()
        console.log("Conexion a BD exitosa.");
        await sequelize.sync({ force: false })
    }
    catch (error) {
        console.error("Conexion no se logro.", error);
    }
}

app.get('/', function(req, res){
    res.send('Programación Web');
})

app.listen(port, function(){
    console.log("El servidor esta escuchando, puerto; " + port);
    verificarConexion();
})