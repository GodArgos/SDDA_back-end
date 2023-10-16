//const db = require('../../database/database.js');
import { sequelize as db } from '../../database/database.js';



export const insertFileLink = async (link) => {
  try {
    const result = await db.query('INSERT INTO FormularioIngreso(file_link) VALUES($1) RETURNING *', [link]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

//module.exports = { insertFileLink };


