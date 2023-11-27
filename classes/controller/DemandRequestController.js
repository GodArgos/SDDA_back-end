import { Op } from "sequelize";

import { FormularioIngreso } from "../../models/forms/FormularioIngreso.js";
import { PersonaNatural } from "../../models/users/PersonaNatural.js";

export class DemandRequestController {

    async getAllDemandReq() {
        let entries = await FormularioIngreso.findAll({
            where: {
                estadoDemandaId: {
                    [Op.eq]: 1
                }
            },
            include: [
                { model: PersonaNatural }
            ], // Incluye la tabla relacionada PersonaNatural
        });

        if (entries) {
            entries = entries.sort((a, b) => {
                const fechaA = a.fecha_emision.split('/').reverse().join('');
                const fechaB = b.fecha_emision.split('/').reverse().join('');
                return fechaB.localeCompare(fechaA);
            });
            return entries;
        }
        else {
            return null;
        }
    }

    async getDemandReq(reqid) {
        const entry = await FormularioIngreso.findByPk(reqid, {
            include: [
                { model: PersonaNatural }
            ]
        });

        if (entry) {
            return entry;
        }
        else {
            return null;
        }
    }

    async deleteDemandReq(reqid) {
        const formularioIngreso = await FormularioIngreso.findByPk(reqid);

        if (!formularioIngreso) {
            return 404;
        }

        // Eliminar la entrada
        await formularioIngreso.destroy();
        return 200;
    }

    async getPDFLinkByPersonaNaturalId(pnatid) {
        try {
            // Buscar el formulario basado en el ID de la persona natural
            const formulario = await FormularioIngreso.findOne({
                where: {
                    personaNaturalId: {
                        [Op.eq]: pnatid
                    }
                }
            });

            if (formulario) {
                return formulario.pdf_path;
            } else {
                throw new Error('No se encontró el formulario para el ID de persona natural proporcionado.');
            }

        } catch (e) {
            throw e;
        }
    }

    async setDemandState(reqId, state, comment) {
        const demreq = await FormularioIngreso.findByPk(reqId, {
            include: [
                { model: PersonaNatural }
            ]
        });

        if (demreq) {
            if (state == 3) {
                if (comment && comment.trim()) {
                    demreq.comentario = comment;
                    demreq.estadoDemandaId = state;
                    await demreq.save();

                    return 200;
                }
                else {
                    return 405;
                }
            }
            else {
                demreq.estadoDemandaId = state;
                await demreq.save();

                return 200;
            }
        }
        else {
            return 404;
        }
    }

    async getMyDemandsReq(personaId) {
        let demreq = await FormularioIngreso.findAll({
            where: {
                personaNaturalId: {
                    [Op.eq]: personaId
                }
            },
            include: [
                { model: PersonaNatural }
            ]
        });

        if (demreq) {
            demreq = demreq.sort((a, b) => {
                const fechaA = a.fecha_emision.split('/').reverse().join('');
                const fechaB = b.fecha_emision.split('/').reverse().join('');
                return fechaB.localeCompare(fechaA);
            });
            return demreq;
        }
        else {
            return null;
        }
    }
}