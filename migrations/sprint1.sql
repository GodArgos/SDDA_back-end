INSERT INTO "Sexo" (nombre) VALUES ('Masculino');
INSERT INTO "Sexo" (nombre) VALUES ('Femenino');
INSERT INTO "Sexo" (nombre) VALUES ('Otro');

INSERT INTO "EstadoCivil" (nombre) VALUES ('Soltero');
INSERT INTO "EstadoCivil" (nombre) VALUES ('Casado');
INSERT INTO "EstadoCivil" (nombre) VALUES ('Viudo');
INSERT INTO "EstadoCivil" (nombre) VALUES ('Divorciado');

INSERT INTO "EstadoDemanda" (nombre) VALUES ('Finalizado');
INSERT INTO "EstadoDemanda" (nombre) VALUES ('En Proceso');

INSERT INTO "GradoInstruccion" (nombre) VALUES ('Educacion Inicial');
INSERT INTO "GradoInstruccion" (nombre) VALUES ('Educacion Primaria');
INSERT INTO "GradoInstruccion" (nombre) VALUES ('Educacion Secundaria');
INSERT INTO "GradoInstruccion" (nombre) VALUES ('Educacion Superior');

INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('LimaLadrillos', 17310202794, 2000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('AndesTextiles', 72777002223, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Cuzco Café', 93931655275, 3000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Muebles Armando', 41691594935, 1500);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('ParadiseTech', 13759457830, 4000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('IncasTours', 78372924038, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Banco Inca del Perú', 22079222798, 4020);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Pinturas Machu Picchu', 55531555200, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('ArequipaAlpacas', 44533537279, 6000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('NazcaNetworks', 62622112673, 1050);

INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('TechRevolution Corp', 12345678901, 2000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('EcoFashion Studios', 98765432109, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Machu Picchu Gourmet', 56789012345, 3000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Artisan Furniture', 78901234567, 1500);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Digital Nexus', 23456789012, 4000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Incan Adventures', 34567890123, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Andean Banking Group', 45678901234, 4020);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Machu Picchu Paints', 56789012345, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Andes Alpaca Exports', 67890123456, 6000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Nazca IT Solutions', 78901234567, 1050);

INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 1);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (1, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (1, 3);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 1);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 3);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 3);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (2, 2);

INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (2, 1);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (4, 3);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (1, 0);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (5, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (2, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (0, 1);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 4);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (1, 1);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (2, 3);

INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (47856231, 'Carlos Alberto', 'Gonzales Paredes', 'Carlos Alberto Gonzales Paredes', 'Av. Arequipa 345, Lima', 1, 3, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (39284756, 'Maria Luisa', 'Quispe Huaman', 'Maria Luisa Quispe Huaman', 'Jr. Los Pinos 784, Lima', 2, 2, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (58392047, 'Juan', 'Ramirez Vargas', 'Juan Ramirez Vargas', 'Calle Los Olivos 123, Lima', 3, 4, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (69483720, 'Rosa Maria', 'Torres Fernandez', 'Rosa Maria Torres Fernandez', 'Av. El Sol 908, Lima', 2, 1, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (78563492, 'Pedro', 'Mendoza Lopez', 'Pedro Mendoza Lopez', 'Calle San Martin 456, Lima', 1, 3, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (89674523, 'Ana', 'Castillo Gutierrez', 'Ana Castillo Gutierrez', 'Av. Larco 789, Lima', 3, 2, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (90785634, 'Luis Enrique', 'Perez Salas', 'Luis Enrique Perez Salas', 'Jr. Los Eucaliptos 321, Lima', 3, 1, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (61827394, 'Julia', 'Diaz Moreno', 'Julia Diaz Moreno', 'Calle Los Ficus 654, Chiclayo', 2, 4, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (72938465, 'Roberto', 'Vega Ortiz', 'Roberto Vega Ortiz', 'Av. Los Heroes 432, Puno', 1, 3, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (84049576, 'Carmen', 'Rojas Maldonado', 'Carmen Rojas Maldonado', 'Jr. Las Magnolias 231, Iquitos', 2, 1, 1);

INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (12345678, 'Juan', 'Perez', 'Juan Perez', 'Av. Arequipa 123, Lima', 1, 2, 3);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (23456789, 'Ana', 'Gonzales', 'Ana Gonzales', 'Jr. Los Pinos 456, Lima', 2, 1, 4);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (34567890, 'Carlos', 'Vargas', 'Carlos Vargas', 'Calle Los Olivos 789, Lima', 3, 4, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (45678901, 'Maria', 'Torres', 'Maria Torres', 'Av. El Sol 345, Lima', 1, 3, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (56789012, 'Luis', 'Lopez', 'Luis Lopez', 'Calle San Martin 678, Lima', 2, 2, 3);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (67890123, 'Fernanda', 'Castillo', 'Fernanda Castillo', 'Av. Larco 901, Lima', 3, 1, 4);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (78901234, 'Eduardo', 'Ramirez', 'Eduardo Ramirez', 'Jr. Los Eucaliptos 123, Lima', 1, 2, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (89012345, 'Olga', 'Diaz', 'Olga Diaz', 'Calle Los Ficus 456, Chiclayo', 2, 3, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (90123456, 'Javier', 'Vega', 'Javier Vega', 'Av. Los Heroes 789, Puno', 3, 4, 3);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadoCivilId", "gradoInstruccionId") VALUES (12345987, 'Sara', 'Rojas', 'Sara Rojas', 'Jr. Las Magnolias 101, Iquitos', 2, 1, 4);

INSERT INTO "Juzgado" (direccion) VALUES ('Av. Javier Prado 3030, San Borja, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Av. Manuel Holguin 2945, San Borja, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Av. Aviacion 6762, San Borja, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Jr. Camana 421, Cercado de Lima, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Av. Arequipa 1123, Lince, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Calle Berlin 345, Miraflores, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Av. Universitaria 2065, San Miguel, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Jr. De la Unión 987, Cercado de Lima, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Av. El Ejercito 475, Magdalena del Mar, Lima, Lima');
INSERT INTO "Juzgado" (direccion) VALUES ('Calle Los Tulipanes 284, La Molina, Lima, Lima');

INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (1, 47856231, 1, 1, 1);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (2, 39284756, 2, 2, 2);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (3, 58392047, 3, 3, 3);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (4, 69483720, 4, 4, 4);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (5, 78563492, 5, 5, 5);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (6, 89674523, 6, 6, 6);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (7, 90785634, 7, 7, 7);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (8, 61827394, 8, 8, 8);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (9, 72938465, 9, 9, 9);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (10, 84049576, 10, 10, 10);

INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (11, 12345678, 11, 11, 11);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (12, 23456789, 12, 12, 12);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (13, 34567890, 13, 13, 13);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (14, 45678901, 14, 14, 14);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (15, 56789012, 15, 15, 15);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (16, 67890123, 16, 16, 16);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (17, 78901234, 17, 17, 17);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (18, 89012345, 18, 18, 18);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (19, 90123456, 19, 19, 19);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (20, 12345987, 20, 20, 20);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (12345678, 'Juan', 'Perez', 'Juan Perez', 'Av. Arequipa 123, Lima', 1, 11);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (23456789, 'Ana', 'Gonzales', 'Ana Gonzales', 'Jr. Los Pinos 456, Lima', 2, 12);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (34567890, 'Carlos', 'Vargas', 'Carlos Vargas', 'Calle Los Olivos 789, Lima', 3, 13);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (45678901, 'Maria', 'Torres', 'Maria Torres', 'Av. El Sol 345, Lima', 1, 14);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (56789012, 'Luis', 'Lopez', 'Luis Lopez', 'Calle San Martin 678, Lima', 2, 15);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (67890123, 'Fernanda', 'Castillo', 'Fernanda Castillo', 'Av. Larco 901, Lima', 3, 16);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (78901234, 'Eduardo', 'Ramirez', 'Eduardo Ramirez', 'Jr. Los Eucaliptos 123, Lima', 1, 17);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (89012345, 'Olga', 'Diaz', 'Olga Diaz', 'Calle Los Ficus 456, Chiclayo', 2, 18);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (90123456, 'Javier', 'Vega', 'Javier Vega', 'Av. Los Heroes 789, Puno', 3, 19);

INSERT INTO "Demandado" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "expedienteId")
VALUES (12345987, 'Sara', 'Rojas', 'Sara Rojas', 'Jr. Las Magnolias 101, Iquitos', 2, 20);

INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('carlos.gonzales', 'password123', 'Carlos Alberto', 'Gonzales Paredes', 'Carlos Alberto Gonzales Paredes', 47856231, 'carlos@email.com', 1, 1);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('maria.quispe', 'password123', 'Maria Luisa', 'Quispe Huaman', 'Maria Luisa Quispe Huaman', 39284756, 'maria@email.com', 2, 2);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('juan.ramirez', 'password123', 'Juan', 'Ramirez Vargas', 'Juan Ramirez Vargas', 58392047, 'juan@email.com', 3, 3);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('rosa.torres', 'password123', 'Rosa Maria', 'Torres Fernandez', 'Rosa Maria Torres Fernandez', 69483720, 'rosa@email.com', 2, 4);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('pedro.mendoza', 'password123', 'Pedro', 'Mendoza Lopez', 'Pedro Mendoza Lopez', 78563492, 'pedro@email.com', 1, 5);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('ana.castillo', 'password123', 'Ana', 'Castillo Gutierrez', 'Ana Castillo Gutierrez', 89674523, 'ana@email.com', 3, 6);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('luis.perez', 'password123', 'Luis Enrique', 'Perez Salas', 'Luis Enrique Perez Salas', 90785634, 'luis@email.com', 3, 7);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('julia.diaz', 'password123', 'Julia', 'Diaz Moreno', 'Julia Diaz Moreno', 61827394, 'julia@email.com', 2, 8);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('roberto.vega', 'password123', 'Roberto', 'Vega Ortiz', 'Roberto Vega Ortiz', 72938465, 'roberto@email.com', 1, 9);
INSERT INTO "PersonaNatural" (username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES ('carmen.rojas', 'password123', 'Carmen', 'Rojas Maldonado', 'Carmen Rojas Maldonado', 84049576, 'carmen@email.com', 2, 10);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_carlos', 'password123', 'Carlos', 'Fernandez', 'Carlos Fernandez', '87778512', 'JZ12345', 'carlos@email.com', 1, 1);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_ana', 'password456', 'Ana', 'Lopez', 'Ana Lopez', '75293393', 'JZ23456', 'ana@email.com', 2, 2);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_luis', 'password789', 'Luis', 'Ramirez', 'Luis Ramirez', '93130263', 'JZ34567', 'luis@email.com', 1, 3);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_maria', 'password012', 'Maria', 'Gonzales', 'Maria Gonzales', '24192181', 'JZ45678', 'maria@email.com', 2, 4);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_juan', 'password345', 'Juan', 'Martinez', 'Juan Martinez', '40430787', 'JZ56789', 'juan@email.com', 1, 5);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_rosa', 'password678', 'Rosa', 'Perez', 'Rosa Perez', '67059745', 'JZ67890', 'rosa@email.com', 2, 6);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_pedro', 'password901', 'Pedro', 'Castillo', 'Pedro Castillo', '92386901', 'JZ78901', 'pedro@email.com', 1, 7);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_lucia', 'password234', 'Lucia', 'Santos', 'Lucia Santos', '21518226', 'JZ89012', 'lucia@email.com', 2, 8);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_sergio', 'password567', 'Sergio', 'Gomez', 'Sergio Gomez', '83440589', 'JZ90123', 'sergio@email.com', 1, 9);

INSERT INTO "Juez" (username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES ('juez_carmen', 'password890', 'Carmen', 'Vega', 'Carmen Vega', '34910024', 'JZ12346', 'carmen@email.com', 2, 10);
