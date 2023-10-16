//const cloudinary = require('../../utils/cloudinaryConfig');
//const { insertFileLink } = require('../../classes/model/PDFForm');
//import FormularioIngreso from '../../models/forms/FormularioIngreso';
//import upload from '../../utils/multerConfig.js';
import { Readable } from 'stream';
import cloudinary from '../../utils/cloudinaryConfig.js';
import { insertFileLink } from '../../classes/model/PDFForm.js';
import multer from 'multer';




//const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

export const uploadFile = async (req, res) => {
  try {
    const uploadFunction = cloudinary.uploader.upload_stream(
      { resource_type: 'raw', folder: "SDDA", format: 'pdf' },
      async (error, result) => {
        if (error) {
          console.error("Error al subir a Cloudinary:", error);
          return res.status(500).json({ error: error.message });
        }

        const link = result.secure_url; // <-- Aquí es donde se extrae el link

        const dbResult = await insertFileLink(req.body.id, link);

        //res.status(201).json(dbResult);

        if (dbResult != 200) {
          res.status(404).json({ error: "Problemas al crear solicitud de demanda." })
        }
        else {
          res.status(201).json({ message: "Solicitud creada con exito "});
        }
      }
    );

    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null); // Indicar el final del stream

    bufferStream.pipe(uploadFunction); // Enviar el stream a la función de Cloudinary

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const uploadMiddleware = upload.single('file');



/*export const uploadFile = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'raw' },
      async (error, result) => {


        if (error) {
          console.error("Error al subir a Cloudinary:", error);
          return;
        }

        const link = result.secure_url;
        const dbResult = await insertFileLink(link);
        res.status(201).json(dbResult);
      }
    );
    req.file.stream.pipe(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/



/*module.exports = {
  uploadFile,
  uploadMiddleware: upload.single('file')
};*/



