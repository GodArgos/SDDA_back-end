import { expect } from 'chai';
import sinon from 'sinon';
import { UserController } from './UserController.js';
import { PersonaNatural } from '../../models/users/PersonaNatural.js';
import { Juez } from '../../models/users/Juez.js';
import { Secretario } from '../../models/users/Secretario.js';
import { ExpedientController } from './ExpedientController.js';

//PRUEBA UNITARIA createUser

describe('UserController', () => {
    describe('createUser', () => {
        let personaNaturalFindOneStub, juezFindOneStub, secretarioFindOneStub, expedientControllerStub;
        let userController;

        beforeEach(() => {
            userController = new UserController();
            personaNaturalFindOneStub = sinon.stub(PersonaNatural, 'findOne').resolves(null);
            juezFindOneStub = sinon.stub(Juez, 'findOne').resolves(null);
            secretarioFindOneStub = sinon.stub(Secretario, 'findOne').resolves(null);
            expedientControllerStub = sinon.stub(ExpedientController.prototype, 'searchExpedient');
        });

        afterEach(() => {
            sinon.restore(); // Restaura todos los stubs
        });

        it('Debería crear un nuevo usuario si el Expediente existe', async () => {
            const userData = {
                username: 'joacoxd',
                password: 'muerteatpi333',
                dni: '06607755',
                email: 'email@prueba.com',
                names: 'Luis',
                lastnames: 'Lopez',
                sex: '1'
            };

            // expedientControllerStub.resolves(null); // CON ESTE SALE ERROR PORQUE NO ENCUENTRA UN EXPEDIENTE
            expedientControllerStub.resolves( {id : 1} ); // Simula encontrar un expediente
            sinon.stub(PersonaNatural, 'create').resolves(userData); // Simula la creación del usuario

            const result = await userController.createUser(userData);

            expect(result).to.equal(200);
        });

        it('Debería retornar 404 si no se encuentra un Expediente', async () => {
            const userData = {
                username: 'testUser',
                password: 'pepito',
                dni: '12345678',
                email: 'test@example.com',
                names: 'pepito canela',
                lastnames: 'freddy fazbear',
                sex: '2'
            };

            expedientControllerStub.resolves(null); // Simula no encontrar un expediente

            const result = await userController.createUser(userData);

            expect(result).to.equal(404);
        });

        it('Debería retornar 404 si ya existe esta Persona Natural', async () => {
            const userData = {
                username: 'MiguelGuillen3',
                password: 'muerteatpi333',
                dni: '76471907',
                email: 'mikeca333@gmail.com',
                names: 'Miguel Cesar Aurelio',
                lastnames: 'Guillen Bustamante',
                sex: '1'
            };

            // Simula encontrar un usuario existente en PersonaNatural
            personaNaturalFindOneStub.resolves(userData);

            const result = await userController.createUser(userData);

            expect(result).to.equal(404);
            sinon.assert.notCalled(sinon.stub(PersonaNatural, 'create')); // Verifica que no se intenta crear el usuario
        });
        

        it('Debería retornar 404 si ya existe un Juez', async () => {
            const userData = {
                username: 'MiguelGuillen3',
                password: 'muerteatpi333',
                dni: '87778512',
                email: 'carlos@email.com',
                names: 'Miguel Cesar Aurelio',
                lastnames: 'Guillen Bustamante',
                sex: '1'
            };

            // Simula encontrar un usuario existente en Juez
            juezFindOneStub.resolves(userData);

            const result = await userController.createUser(userData);

            expect(result).to.equal(404);
            sinon.assert.notCalled(sinon.stub(PersonaNatural, 'create')); // Verifica que no se intenta crear el usuario
        });

    });

    
//PRUEBA UNITARIA modifyUserSecretary
    
    describe('modifyUserSecretary', () => {
        let secretarioFindOneStub, secretarioSaveStub;
        let userController;

        beforeEach(() => {
            userController = new UserController();
            secretarioFindOneStub = sinon.stub(Secretario, 'findOne');
            secretarioSaveStub = sinon.stub(Secretario.prototype, 'save');
        });

        afterEach(() => {
            sinon.restore();
        });

        it('No se modifican datos del Secretario', async () => {
            const secreData = {
                id: 1,
                password: 'oldPassword',
                nombres: 'John',
                apellidos: 'Doe',
                correo: 'john@example.com',
                sexoId: 1,
                juzgadoId: 2,
                save: secretarioSaveStub
            };
            secretarioFindOneStub.resolves(secreData);

            const result = await userController.modifyUserSecretary({ id: 1 });
            expect(result).to.equal(secreData);
        });


        it('El Secretario cambia su contraseña', async () => {
            const secreData = { 
                id: 1,
                password: 'newPassword',
                nombres: 'John',
                apellidos: 'Doe',
                correo: 'john@example.com',
                sexoId: 1,
                juzgadoId: 2,
                save: secretarioSaveStub };
            secretarioFindOneStub.resolves(secreData);

            const result = await userController.modifyUserSecretary({ id: 1, password: 'newPassword' });
            expect(result).to.equal(secreData);
            expect(secretarioSaveStub.called).to.be.true;
        });

        it('El Secretario modifica todos sus datos', async () => {
            const secreData = { 
                id: 1,
                password: 'oldPassword',
                nombres: 'John',
                apellidos: 'Doe',
                correo: 'john@example.com',
                sexoId: 1,
                juzgadoId: 2,
                save: secretarioSaveStub };
            secretarioFindOneStub.resolves(secreData);

            const updatedFields = {
                id: 1,
                password: 'newPassword',
                nombres: 'Jane',
                apellidos: 'Smith',
                correo: 'jane@example.com',
                sexoId: 2,
                juzgadoId: 3
            };
            const result = await userController.modifyUserSecretary(updatedFields);
            expect(result).to.equal(secreData);
            expect(secretarioSaveStub.called).to.be.true;
        });

        // it('No se encuentra al Secretario en la base de datos', async () => {
        //     secretarioFindOneStub.resolves(null);
        //     const result = await userController.modifyUserSecretary({ id: 999 });
        //     expect(result).to.be.null;
        // });

        it('No se encuentra al Secretario en la base de datos', async () => {
            secretarioFindOneStub.resolves(null);
            try {
                await userController.modifyUserSecretary({ id: 999 });
                // Si llega aquí, la prueba fallará
                expect.fail("La función no lanzó un error cuando se esperaba uno");
            } catch (error) {
                // Verifica que se lanzó un error
                expect(error).to.be.an('Error');
            }
        });        

    });


//PRUEBA UNITARIA modifyUserJudge

    describe('modifyUserJudge', () => {
        let juezFindOneStub, juezSaveStub;
        let userController;

        beforeEach(() => {
            userController = new UserController();
            juezFindOneStub = sinon.stub(Juez, 'findOne');
            juezSaveStub = sinon.stub(Juez.prototype, 'save');
        });

        afterEach(() => {
            sinon.restore();
        });


        it('No se modifican datos del Juez', async () => {
            const juezData = {
                id: 1,
                password: 'contraseñaAntigua',
                nombres: 'Luis',
                apellidos: 'Lopez',
                correo: 'luislopez@email.com',
                sexoId: 1,
                juzgadoId: 2,
                save: juezSaveStub
            };
            juezFindOneStub.resolves(juezData);

            const result = await userController.modifyUserJudge({ id: 1 });
            expect(result).to.equal(juezData);
        });

        
        it('El Juez cambia su contraseña', async () => {
            const juezData = { 
                id: 1,
                password: 'nuevaContraseña',
                nombres: 'Luis',
                apellidos: 'Lopez',
                correo: 'luislopez@email.com',
                sexoId: 1,
                juzgadoId: 2,
                save: juezSaveStub 
            };
            juezFindOneStub.resolves(juezData);

            const result = await userController.modifyUserJudge({ id: 1, password: 'newPassword' });
            expect(result).to.equal(juezData);
            expect(juezSaveStub.called).to.be.true;
        });



        it('El Juez modifica todos sus datos', async () => {
            const juezData = { 
                id: 1,
                password: 'contraseñaAntigua',
                nombres: 'Luis',
                apellidos: 'Lopez',
                correo: 'luislopez@email.com',
                sexoId: 1,
                juzgadoId: 2,
                save: juezSaveStub 
            };
            juezFindOneStub.resolves(juezData);


            const updatedFields = {
                id: 1,
                password: 'nuevaContraseña',
                nombres: 'Luis',
                apellidos: 'Lopez Bernales',
                correo: 'luislopezbernales@email.com',
                sexoId: 1,
                juzgadoId: 3
            };
            const result = await userController.modifyUserJudge(updatedFields);
            expect(result).to.equal(juezData);
            expect(juezSaveStub.called).to.be.true;
        });
        

        it('No se encuentra al Juez en la base de datos', async () => {
            juezFindOneStub.resolves(null);
            try {
                await userController.modifyUserJudge({ id: 999 });
                // Si llega aquí, la prueba fallará
                expect.fail("La función no lanzó un error cuando se esperaba uno");
            } catch (error) {
                // Verifica que se lanzó un error
                expect(error).to.be.an('Error');
            }
        });

    });


//PRUEBA UNITARIA modifyUserPerson

    describe('modifyUserPerson', () => {
        let personaNaturalFindOneStub, personaNaturalSaveStub;
        let userController;

        beforeEach(() => {
            userController = new UserController();
            personaNaturalFindOneStub = sinon.stub(PersonaNatural, 'findOne');
            personaNaturalSaveStub = sinon.stub(PersonaNatural.prototype, 'save');
        });

        afterEach(() => {
            sinon.restore();
        });

        it('No se modifican datos de la Persona Natural', async () => {
            const personaNaturalData = {
                id: 1,
                password: 'oldPassword',
                nombres: 'Pablo',
                apellidos: 'Perez',
                correo: 'pabloperez@email.com',
                sexoId: 1,
                save: personaNaturalSaveStub
            };
            personaNaturalFindOneStub.resolves(personaNaturalData);

            const result = await userController.modifyUserPerson({ id: 1 });
            expect(result).to.equal(personaNaturalData);
        });

        it('La Persona Natural cambia su contraseña', async () => {
            const personaNaturalData = { 
                id: 1,
                password: 'newPassword',
                nombres: 'Pablo',
                apellidos: 'Perez',
                correo: 'pabloperez@email.com',
                sexoId: 1, 
                save: personaNaturalSaveStub 
            };
            personaNaturalFindOneStub.resolves(personaNaturalData);

            const result = await userController.modifyUserPerson({ id: 1, password: 'newPassword' });
            expect(result).to.equal(personaNaturalData);
            expect(personaNaturalSaveStub.called).to.be.true;
        });

        it('La Persona Natural modifica todos sus datos', async () => {
            const personaNaturalData = { 
                id: 1,
                password: 'oldPassword',
                nombres: 'Pablo',
                apellidos: 'Perez',
                correo: 'pabloperez@email.com',
                sexoId: 1, 
                save: personaNaturalSaveStub 
            };
            personaNaturalFindOneStub.resolves(personaNaturalData);


            const updatedFields = {
                id: 1,
                password: 'newPassword',
                nombres: 'Pablo',
                apellidos: 'Perez Fernandez',
                correo: 'pabloperezfernandez@email.com',
                sexoId: 1
            };
            const result = await userController.modifyUserPerson(updatedFields);
            expect(result).to.equal(personaNaturalData);
            expect(personaNaturalSaveStub.called).to.be.true;
        });


        it('No se encuentra a la Persona Natural en la base de datos', async () => {
            personaNaturalFindOneStub.resolves(null);
            try {
                await userController.modifyUserPerson({ id: 999 });
                // Si llega aquí, la prueba fallará
                expect.fail("La función no lanzó un error cuando se esperaba uno");
            } catch (error) {
                // Verifica que se lanzó un error
                expect(error).to.be.an('Error');
            }

        });

    });

});