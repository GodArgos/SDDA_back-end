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

INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'carlos.gonzales', 'password123', 'Carlos Alberto', 'Gonzales Paredes', 'Carlos Alberto Gonzales Paredes', 47856231, 'carlos@email.com', 1, 1);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'maria.quispe', 'password123', 'Maria Luisa', 'Quispe Huaman', 'Maria Luisa Quispe Huaman', 39284756, 'maria@email.com', 2, 2);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'juan.ramirez', 'password123', 'Juan', 'Ramirez Vargas', 'Juan Ramirez Vargas', 58392047, 'juan@email.com', 3, 3);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'rosa.torres', 'password123', 'Rosa Maria', 'Torres Fernandez', 'Rosa Maria Torres Fernandez', 69483720, 'rosa@email.com', 2, 4);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'pedro.mendoza', 'password123', 'Pedro', 'Mendoza Lopez', 'Pedro Mendoza Lopez', 78563492, 'pedro@email.com', 1, 5);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'ana.castillo', 'password123', 'Ana', 'Castillo Gutierrez', 'Ana Castillo Gutierrez', 89674523, 'ana@email.com', 3, 6);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'luis.perez', 'password123', 'Luis Enrique', 'Perez Salas', 'Luis Enrique Perez Salas', 90785634, 'luis@email.com', 3, 7);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'julia.diaz', 'password123', 'Julia', 'Diaz Moreno', 'Julia Diaz Moreno', 61827394, 'julia@email.com', 2, 8);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'roberto.vega', 'password123', 'Roberto', 'Vega Ortiz', 'Roberto Vega Ortiz', 72938465, 'roberto@email.com', 1, 9);
INSERT INTO "PersonaNatural" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, correo, "sexoId", "expedienteId") 
VALUES (0, 'carmen.rojas', 'password123', 'Carmen', 'Rojas Maldonado', 'Carmen Rojas Maldonado', 84049576, 'carmen@email.com', 2, 10);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_carlos', 'password123', 'Carlos', 'Fernandez', 'Carlos Fernandez', '87778512', 'JZ12345', 'carlos@email.com', 1, 1);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_ana', 'password456', 'Ana', 'Lopez', 'Ana Lopez', '75293393', 'JZ23456', 'ana@email.com', 2, 2);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_luis', 'password789', 'Luis', 'Ramirez', 'Luis Ramirez', '93130263', 'JZ34567', 'luis@email.com', 1, 3);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_maria', 'password012', 'Maria', 'Gonzales', 'Maria Gonzales', '24192181', 'JZ45678', 'maria@email.com', 2, 4);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_juan', 'password345', 'Juan', 'Martinez', 'Juan Martinez', '40430787', 'JZ56789', 'juan@email.com', 1, 5);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_rosa', 'password678', 'Rosa', 'Perez', 'Rosa Perez', '67059745', 'JZ67890', 'rosa@email.com', 2, 6);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_pedro', 'password901', 'Pedro', 'Castillo', 'Pedro Castillo', '92386901', 'JZ78901', 'pedro@email.com', 1, 7);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_lucia', 'password234', 'Lucia', 'Santos', 'Lucia Santos', '21518226', 'JZ89012', 'lucia@email.com', 2, 8);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_sergio', 'password567', 'Sergio', 'Gomez', 'Sergio Gomez', '83440589', 'JZ90123', 'sergio@email.com', 1, 9);

INSERT INTO "Juez" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId")
VALUES (1, 'juez_carmen', 'password890', 'Carmen', 'Vega', 'Carmen Vega', '34910024', 'JZ12346', 'carmen@email.com', 2, 10);


INSERT INTO "FormularioIngreso" (nro_solicitud, fecha_emision, pdf_path, "personaNaturalId", estado) 
VALUES (1, '17/10/2023', 'https://res.cloudinary.com/dikglrbuw/raw/upload/v1697520401/SDDA/zoaxe3hcu8oudmmrt0tf.pdf', 1, 0);

INSERT INTO "FormularioIngreso" (nro_solicitud, fecha_emision, pdf_path, "personaNaturalId", estado) 
VALUES (2, '10/02/2023', 'https://res.cloudinary.com/dikglrbuw/raw/upload/v1697609426/SDDA/ja4l4logawlmr9pcc70f.pdf', 2, 0);

INSERT INTO "FormularioIngreso" (nro_solicitud, fecha_emision, pdf_path, "personaNaturalId", estado) 
VALUES (3, '07/03/2023', 'https://res.cloudinary.com/dikglrbuw/raw/upload/v1697609525/SDDA/pe5ouokdido9fd8gwm1j.pdf', 3, 0);

INSERT INTO "FormularioIngreso" (nro_solicitud, fecha_emision, pdf_path, "personaNaturalId", estado) 
VALUES (4, '19/04/2023', 'https://res.cloudinary.com/dikglrbuw/raw/upload/v1697609603/SDDA/x4n8j5x3fn8yra7o6tw5.pdf', 4, 0);

INSERT INTO "FormularioIngreso" (nro_solicitud, fecha_emision, pdf_path, "personaNaturalId", estado) 
VALUES (5, '26/12/2023', 'https://res.cloudinary.com/dikglrbuw/raw/upload/v1697609663/SDDA/j4pewocxgabzhbjuayzu.pdf', 5, 0);


INSERT INTO "Demanda" (nro_demanda, fecha_emision, descripcion, "juezId", "personaNaturalId", "demandadoId", "estadoDemandaId", "formularioId")
VALUES (1, '18/10/2023', 'Un padre soltero demanda al otro progenitor para obtener una contribución económica para el cuidado de sus hijos.', 1, 1, 1, 2, 1);

INSERT INTO "Demanda" (nro_demanda, fecha_emision, descripcion, "juezId", "personaNaturalId", "demandadoId", "estadoDemandaId", "formularioId")
VALUES (2, '12/02/2023', 'Un cónyuge solicita una pensión alimenticia tras el divorcio para mantener su nivel de vida anterior al matrimonio.', 2, 2, 1, 2, 2);

INSERT INTO "Demanda" (nro_demanda, fecha_emision, descripcion, "juezId", "personaNaturalId", "demandadoId", "estadoDemandaId", "formularioId")
VALUES (3, '10/03/2023', 'Un padre demanda al otro progenitor para asegurar la atención y el sustento continuo de un hijo adulto con discapacidades.', 3, 3, 1, 2, 3);

INSERT INTO "Demanda" (nro_demanda, fecha_emision, descripcion, "juezId", "personaNaturalId", "demandadoId", "estadoDemandaId", "formularioId")
VALUES (4, '30/04/2023', 'Un cónyuge divorciado inicia una demanda legal para hacer cumplir los pagos de alimentos acordados que no se han pagado.', 4, 4, 1, 2, 4);

INSERT INTO "Demanda" (nro_demanda, fecha_emision, descripcion, "juezId", "personaNaturalId", "demandadoId", "estadoDemandaId", "formularioId")
VALUES (5, '05/01/2024', 'Un padre que busca la custodia de sus hijos inicia una demanda de alimentos contra el otro progenitor para contribuir a los gastos de crianza de los menores.', 5, 5, 1, 2, 5);



------ PRUEBA CREAR DEMANDA -------

INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('LimaLadrillos', 17310202794, 2000);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('AndesTextiles', 72777002223, 1050);
INSERT INTO "FormMINTRABAJO" (nom_lugar_trabajo, ruc_lugar_trabajo, monto_ingreso) VALUES ('Cuzco Café', 93931655275, 3000);

INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (3, 2);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (2, 1);
INSERT INTO "FormSUNARP" (nro_propiedades, nro_vehiculos) VALUES (4, 3);

INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (73217549, 'Joaquin Alfredo', 'Incio Diaz', 'Joaquin Alfredo Incio Diaz', 'Av San Felipe 687, Lima', 1, 3, 2);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (74155186, 'Marco Andre', 'Quispe Granda', 'Marco Andre Quispe Granda', 'Jr. Los Rosales 666, Lima', 1, 2, 1);
INSERT INTO "FormRENIEC" (dni, nombres, apellidos, "nombreCompleto", direccion, "sexoId", "estadocivilId", "gradoInstruccionId") VALUES (77697060, 'Gonzalo Miguel', 'Caballero Visso', 'Gonzalo Miguel Caballero Visso', 'Calle Los Pinos 987, Lima', 1, 4, 2);

INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (21, 73217549, 21, 21, 21);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (22, 74155186, 22, 22, 22);
INSERT INTO "Expediente" (nro_expediente, dni, "formReniecId", "formSunarpId", "formMinTrabajoId") VALUES (23, 77697060, 23, 23, 23);


------ SPRINT 2 / INSERTS "SECRETARIO" -------

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_roberta', 'sec_pass1', 'Roberta', 'Mendez', 'Roberta Mendez', '11223344', 'SEC001', 'roberta.mendez@email.com', 1, 2);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_felipe', 'sec_pass2', 'Felipe', 'Garcia', 'Felipe Garcia', '22334455', 'SEC002', 'felipe.garcia@email.com', 2, 4);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_claudia', 'sec_pass3', 'Claudia', 'Fernandez', 'Claudia Fernandez', '33445566', 'SEC003', 'claudia.fernandez@email.com', 3, 6);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_mario', 'sec_pass4', 'Mario', 'Ruiz', 'Mario Ruiz', '44556677', 'SEC004', 'mario.ruiz@email.com', 1, 8);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_silvia', 'sec_pass5', 'Silvia', 'Martinez', 'Silvia Martinez', '55667788', 'SEC005', 'silvia.martinez@email.com', 2, 10);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_eduardo', 'sec_pass6', 'Eduardo', 'Jimenez', 'Eduardo Jimenez', '66778899', 'SEC006', 'eduardo.jimenez@email.com', 3, 3);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_lorena', 'sec_pass7', 'Lorena', 'Castro', 'Lorena Castro', '77889900', 'SEC007', 'lorena.castro@email.com', 1, 5);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_gustavo', 'sec_pass8', 'Gustavo', 'Alvarez', 'Gustavo Alvarez', '88990011', 'SEC008', 'gustavo.alvarez@email.com', 2, 7);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_patricia', 'sec_pass9', 'Patricia', 'Ortiz', 'Patricia Ortiz', '99001122', 'SEC009', 'patricia.ortiz@email.com', 3, 9);

INSERT INTO "Secretario" (tipo, username, password, nombres, apellidos, "nombreCompleto", dni, nro_colegiatura, correo, "sexoId", "juzgadoId") 
VALUES (2, 'sec_ivan', 'sec_pass10', 'Ivan', 'Herrera', 'Ivan Herrera', '12332111', 'SEC010', 'ivan.herrera@gmai.com', 1, 4);
