import { sequelize } from "./database/database.js";
import express from "express";
import cors from "cors";
import { uploadFile } from './classes/controller/FormController.js'
import { uploadMiddleware } from './classes/controller/FormController.js'



//import { insertFileLink, getPDFLinkByNaturalPersonId } from './classes/model/PDFForm.js';






//const express = require('express');
//const { uploadFile, uploadMiddleware } = ('./classes/controller/FormController');



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
import { TypeUserController } from "./classes/controller/TypeUserController.js";
import { DemandRequestController } from "./classes/controller/DemandRequestController.js";

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
        );

        let userControl = new UserController();
        let status = await userControl.createUser(newUser);

        if (status != 200) {
            res.status(404).json({ error: "Problemas al crear usuario." })
        }
        else {
            res.status(200).json({ message: "Usuario creado con exito."} );
        }
    }
    catch (error) {
        res.send(error.message);
    }
});

// Logear Usuario / PersonaNatural / Juez
app.post("/login", async (req, res) => {

    try {
        let userControl = new UserController();
        let user = await userControl.searchUser(req.body.username, req.body.password);

        if (user) {
            res.send(user);
            console.log(user);
        }
        else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    }
    catch (e) {
        res.send(e);
    }

});

// Información más reciente de 'Mi Perfil' - Persona Natural
app.post("/profile-person", async (req, res) => {
    try {
        let typeControl = new TypeUserController();
        const user = await typeControl.searchForNPUser(req.body.username, req.body.password);
        console.log(user)
        if (user) {
            res.send(user);
            console.log(user);
        }
        else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    }
    catch (e) {
        res.send(e);
    }
});

// Información más reciente de 'Mi Perfil' - Juez
app.post("/profile-judge", async (req, res) => {
    try {
        let typeControl = new TypeUserController();
        const juez = await typeControl.searchForJudgeUser(req.body.username, req.body.password);

        if (juez) {
            res.send(juez);
            console.log(juez);
        }
        else {
            res.status(404).json({ error: "Usuario no encontrado." });
        }
    }
    catch (e) {
        res.send(e);
    }
});

// Modificar info en mi 'Mi Perfil' - Persona 
app.post("/modify-profile-person", async (req, res) => {
    try {
        let userControl = new UserController();
        let modifiedUser = await userControl.modifyUserPerson(req.body);

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

// Modificar info en mi 'Mi Perfil' - Juez 
app.post("/modify-profile-judge", async (req, res) => {
    try {
        let userControl = new UserController();
        let modifiedUser = await userControl.modifyUserJudge(req.body);

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
app.post("/plantilla", (req, res) => {
    res.redirect('https://drive.google.com/uc?export=download&id=1oaJt680jc0dfNM9hQ5UkmClf_oPGSP6l');
});

// Crear solicitud de demanda
app.post('/upload', uploadMiddleware, uploadFile);

// Eliminar solicitud de demanda
app.post('/delete-req', async (req, res) => {
    try {
        let dreq = new DemandRequestController();
        let result = await dreq.deleteDemandReq(req.body.id);

        if (result) {
            res.status(200).json({ message: "Solicitud de Demanda eliminada con exito." });
        }
        else {
            res.status(404).json({ message: "Solicitud no encontrada." });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar la solicitud." });
    }
});









// Descargar pdf específico de solicitud
    // Descargar pdf específico basado en el id de persona natural
// Descargar pdf específico basado en el ID de la persona natural

app.get("/download-pdf/:personaNaturalId", async (req, res) => {
    try {
        let dreq = new DemandRequestController();
        const pdfLink = await dreq.getPDFLinkByPersonaNaturalId(req.params.personaNaturalId);

        if (pdfLink) {
            res.redirect(pdfLink);
        } else {
            res.status(404).json({ error: "PDF no encontrado." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al descargar el PDF." });
    }
});


/*
app.get("/download-pdf/:personaNaturalId", async (req, res) => {
    try {
        const personaNaturalId = req.params.personaNaturalId;

        const record = await FormularioIngreso.findOne({
            where: { personaNaturalId: personaNaturalId }
        });

        if (record && record.pdf_path) {
            // redirecciona al link del pdf para descargarlo
            res.redirect(record.pdf_path);
        } else {
            res.status(404).json({ error: "PDF no encontrado." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al descargar el PDF." });
    }
});
*/
















// Conseguir solicitud de demanda específica
app.post("/get-dem-req", async (req, res) => {
    try {
        let dreq = new DemandRequestController();
        const entry = await dreq.getDemandReq(req.body.id);

        if (entry) {
            res.send(entry);
        }
        else {
            res.status(404).json({ error: "No existe la solicitud." });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al traer la solicitud." });
    }
});

// Conseguir todas las solicitudes de demanda
app.post("/get-all-dem-req", async (req, res) => {
    try {
        let dreq = new DemandRequestController();
        const entries = await dreq.getAllDemandReq();

        if (entries) {
            res.send(entries);
        }
        else {
            res.status(404).json({ error: "No hay solicitudes." });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al traer solicitudes." });
    }
});

// Crear demanda

// Conseguir todas las demandas
app.post("/get-all-demands", async (req, res) => {
    try {
        let demandControl = new DemandController();
        const demandas = await demandControl.getAllDemands();

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
        const demanda = await demandControl.getDemand(req.body.id);

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
        const expedient = await expControl.searchExpedient(req.body.dni);

        if (expedient) {
            res.send(expedient);
            console.log(expedient)
        }
        else {
            res.status(404).json({ error: "Expediente no encontrado." });
        }
    }
    catch (e) {
        res.send(e);
    }
});