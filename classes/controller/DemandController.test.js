import { expect } from 'chai';
import sinon from 'sinon';
import { Demanda } from '../../models/forms/Demanda.js';
import { DemandController } from './DemandController.js';

describe('DemandController', () => {
    describe('setDemandState', () => {
        let demandaFindByPkStub, demandaSaveStub;
        let demandController;

        beforeEach(() => {
            demandController = new DemandController();
            demandaFindByPkStub = sinon.stub(Demanda, 'findByPk');
            demandaSaveStub = sinon.stub(Demanda.prototype, 'save');
        });

        afterEach(() => {
            sinon.restore();
        });

        it('La Demanda ha sido creada con estado igual a 4 y un comentario no nulo', async () => {
            demandaFindByPkStub.resolves({ estadoDemandaId: 4, save: demandaSaveStub });
            const result = await demandController.setDemandState(1, 4, 'Comentario válido');

            expect(result).to.equal(200);
            expect(demandaSaveStub.called).to.be.true;
        });

        it('La Demanda ha sido creada con estado igual a 4 y un comentario nulo', async () => {
            demandaFindByPkStub.resolves({ estadoDemandaId: 4, save: demandaSaveStub });
            const result = await demandController.setDemandState(1, 4, null);

            expect(result).to.equal(405);
            expect(demandaSaveStub.called).to.be.false;
        });

        it('La Demanda ha sido creada con estado distinto a 4', async () => {
            demandaFindByPkStub.resolves({ estadoDemandaId: 3, save: demandaSaveStub });
            const result = await demandController.setDemandState(1, 3, 'Comentario válido');

            expect(result).to.equal(200);
            expect(demandaSaveStub.called).to.be.true;
        });

        it('La Demanda es nulo', async () => {
            demandaFindByPkStub.resolves(null);
            const result = await demandController.setDemandState(null, 4, 'Comentario válido');

            expect(result).to.equal(404);
        });
    });
});
