import { Readable } from 'stream';
import cloudinary from '../../utils/cloudinaryConfig.js';
import { insertFileLink } from '../../classes/model/PDFForm.js';
import multer from 'multer';

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



