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

app.get('/', function (req, res) {
    res.send('SDDA WORKING');
})

app.listen(port, function () {
    console.log("El servidor esta escuchando, puerto; " + port);
    verificarConexion();
})

// Imports models o controllers
// Models
import { NaturalPerson } from "./classes/model/NaturalPerson.js";

// Controllers
import { UserController } from "./classes/controller/UserController.js";

// ------------------------------------ Endpoints ------------------------------------ 

// Registrar Usuario / Persona Natural
app.post("/registrar", async (req, res) => {
    try {
        const newUser = new NaturalPerson(
            req.body.dni,
            req.body.names,
            req.body.lastnames,
            req.body.sex,
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.address
        );

        let userControl = new UserController();
        let status = userControl.createUser(newUser);

        if (status != 200) {
            return res.status(404).json({ error: "Problemas al crear usuario." })
        }
        else {
            res.send("Usuario creado con exito.");
        }
    }
    catch (error) {
        res.send(e);
    }
});

// Logear Usuario / PersonaNatural / Juez
app.post("/login", async (req, res) => {

    try {
        let userControl = new UserController();
        let user = userControl.searchUser(req.body.username, req.body.password);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        else {
            res.send(user);
            console.log(user);
        }
    }
    catch (e) {
        res.send(e);
    }
    
});

