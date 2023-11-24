import { Demanda } from 'C:../../models/forms/Demanda.js';
import getAllDemands from 'C:../../classes/controller/DemandController.js';
jest.mock('path-to-your-models'); // Mockea los modelos

describe('Pruebas de caja negra para getAllDemands', () => {
    // Prueba con datos de demanda existente
    it('debería retornar un conjunto de demandas cuando existen en la base de datos', async () => {
        const mockDemands = [{ id: 1, nombre: 'Demanda 1' }, { id: 2, nombre: 'Demanda 2' }];
        Demanda.findAll.mockResolvedValue(mockDemands);

        const result = await getAllDemands();
        expect(result).toEqual(mockDemands);
    });



    // Prueba sin datos de demanda
    it('debería retornar null cuando no hay demandas en la base de datos', async () => {
        Demanda.findAll.mockResolvedValue([]);

        const result = await getAllDemands();
        expect(result).toBeNull();
    });



    // Prueba con base de datos inaccesible/errores de conexión
    it('debería manejar situaciones donde la base de datos no está accesible', async () => {
        Demanda.findAll.mockRejectedValue(new Error('Error de conexión'));

        await expect(getAllDemands()).rejects.toThrow('Error de conexión');
    });



    // Prueba con carga pesada de datos
    it('debería manejar correctamente una gran cantidad de demandas', async () => {
        const largeMockDemands = new Array(1000).fill().map((_, i) => ({ id: i, nombre: `Demanda ${i}` }));
        Demanda.findAll.mockResolvedValue(largeMockDemands);

        const result = await getAllDemands();
        expect(result).toEqual(largeMockDemands);
        expect(result).toHaveLength(1000);
    });


    
    // Prueba de integridad de datos
    it('debería recuperar todos los datos y relaciones de las demandas correctamente', async () => {
        const mockDemandsWithRelations = [{ id: 1, nombre: 'Demanda 1', Juez: { nombre: 'Juez 1' } }];
        Demanda.findAll.mockResolvedValue(mockDemandsWithRelations);

        const result = await getAllDemands();
        expect(result).toEqual(mockDemandsWithRelations);
        expect(result[0]).toHaveProperty('Juez');
    });
});



