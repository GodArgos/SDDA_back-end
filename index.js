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
import { ExpedientController } from "./classes/controller/ExpedientController.js";
import { DemandController } from "./classes/controller/DemandController.js";

// ------------------------------------ Endpoints ------------------------------------ 

// Registrar Usuario / Persona Natural
app.post("/register", async (req, res) => {
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

        if (user) {
            res.send(user);
            console.log(user);
        }
        else {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
    }
    catch (e) {
        res.send(e);
    }

});

// Información más reciente de 'Mi Perfil'
app.post("/profile", async (req, res) => {

});

// Modificar info en mi 'Mi Perfil'
app.post("/modify-profile", async (req, res) => {
    try {
        let userControl = new UserController();
        let modifiedUser = userControl.modifyUser(req.body);

        if (modifiedUser) {
            res.send(modifiedUser);
        }
        else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al modificar el usuario." });
    }
});

// Descargar pdf solicitud de demanda "PLANTILLA"

// Descargar pdf específico de solicitud

// Conseguir todas las solicitudes de demanda

// Conseguir solicitud de demanda específica

// Crear demanda

// Conseguir todas las demandas
app.post("/get-all-demands", async (req, res) => {
    try {
        let demandControl = new DemandController();
        const demandas = demandControl.getAllDemands();

        if (demandas) {
            res.send(demandas);
        }
        else {
            res.status(404).json({ message: "No hay demandas." });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al traer demandas." });
    }
});

// Conseguir demanda específica
app.post("/get-demand", async (req, res) => {
    try {
        let demandControl = new DemandController();
        const demanda = demandControl.getDemand(req.body.id);

        if (demanda) {
            res.send(demandas);
        }
        else {
            res.status(404).json({ message: "Demanda no encontrada o no existente." });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al traer demanda." });
    }
});

// Buscar Expediente
app.post("/search-expedient", async (req, res) => {
    try {
        let expControl = new ExpedientController();
        let expedient = expControl.searchExpedient(req.body.dni);

        if (expedient) {
            res.send(expedient);
            console.log(expedient)
        }
        else {
            return res.status(404).json({ error: "Expediente no encontrado." });
        }
    }   
    catch (e) {
        res.send(e);
    }
});