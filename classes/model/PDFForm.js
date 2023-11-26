//const db = require('../../database/database.js');
import { sequelize as db } from '../../database/database.js';
import { FormularioIngreso } from '../../models/forms/FormularioIngreso.js';
import { getActualDate } from "../../utils/Functions.js"


export async function insertFileLink(userId, link) {
  /*try {
    const result = await db.query('INSERT INTO FormularioIngreso(file_link) VALUES($1) RETURNING *', [link]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }*/

  try {
    const maxIdResultUser = await FormularioIngreso.max("id");
    const nextIdUser = (maxIdResultUser || 0) + 1; // Calcula el próximo ID

    let date = getActualDate();

    const solicitud = await FormularioIngreso.create({
      id: nextIdUser,
      nro_solicitud: nextIdUser,
      fecha_emision: date,
      pdf_path: link,
      personaNaturalId: userId,
      estadoId: 1 
    });

    return 200;
  }
  catch (e) {
    console.log(e);
    return 404;
  }
};


export async function getPDFLinkByPersonaNaturalId(personaNaturalId) {
  try {
      const record = await FormularioIngreso.findOne({
          where: { personaNaturalId: personaNaturalId }
      });

      if (record) {
          return record.pdf_path;
      } else {
          return null;
      }
  } catch (error) {
      throw error;
  }
}




//module.exports = { insertFileLink };


