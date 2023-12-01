import { expect } from 'chai';
import sinon from 'sinon';
import { DemandRequestController } from './DemandRequestController.js';
import { FormularioIngreso } from '../../models/forms/FormularioIngreso.js';

describe('DemandRequestController', () => {
    describe('setDemandState', () => {
        let formularioIngresoFindByPkStub, formularioIngresoSaveStub;
        let demandRequestController;

        beforeEach(() => {
            demandRequestController = new DemandRequestController();
            formularioIngresoFindByPkStub = sinon.stub(FormularioIngreso, 'findByPk');
            formularioIngresoSaveStub = sinon.stub(FormularioIngreso.prototype, 'save');
        });

        afterEach(() => {
            sinon.restore();
        });

        it('La Solicitud de demanda ha sido creada con estado igual a 4 y un comentario no nulo', async () => {
            formularioIngresoFindByPkStub.resolves({ estadoDemandaId: 4, save: formularioIngresoSaveStub });
            const result = await demandRequestController.setDemandState(1, 4, 'Comentario válido');

            expect(result).to.equal(200);
            expect(formularioIngresoSaveStub.called).to.be.true;
        });

        it('La Solicitud de demanda ha sido creada con estado igual a 4 y un comentario nulo', async () => {
            formularioIngresoFindByPkStub.resolves({ estadoDemandaId: 4, save: formularioIngresoSaveStub });
            const result = await demandRequestController.setDemandState(1, 4, null);

            expect(result).to.equal(405);
            expect(formularioIngresoSaveStub.called).to.be.false;
        });

        it('La Solicitud de demanda ha sido creada con estado distinto a 4', async () => {
            formularioIngresoFindByPkStub.resolves({ estadoDemandaId: 3, save: formularioIngresoSaveStub });
            const result = await demandRequestController.setDemandState(1, 3, 'Comentario válido');

            expect(result).to.equal(200);
            expect(formularioIngresoSaveStub.called).to.be.true;
        });

        it('La Solicitud de demanda es nulo', async () => {
            formularioIngresoFindByPkStub.resolves(null);
            const result = await demandRequestController.setDemandState(null, 4, 'Comentario válido');

            expect(result).to.equal(404);
        });
    });
});
