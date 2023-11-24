import { Demanda } from 'C:../../models/forms/Demanda.js';
jest.mock('../../models/forms/Demanda.js'); // Mockea los modelos


//pruebas de get all demands
describe('getAllDemands', () => {
    //prueba 1: devuelve un array de demandas si hay demandas disponibles
    it('devuelve un array de demandas cuando hay demandas disponibles', async () => {
        // Configura el mock para devolver un array de demandas
        //Demanda.findAll.mockResolvedValue([...]);     (Da error)

        const resultado = await getAllDemands();
        //expect(resultado).toEqual([...]); // Asegúrate de que devuelve el array esperado   (da error)
    });
    
    
    
    //prueba 2: devuelve nulo si no hay demandas
    it('devuelve null cuando no hay demandas', async () => {
        // Configura el mock para devolver un array vacío
        Demanda.findAll.mockResolvedValue([]);

        const resultado = await getAllDemands();
        expect(resultado).toBeNull();
    });
    
    
    
    //prueba 3: manejo de errores
    it('maneja errores correctamente', async () => {
        // Configura el mock para lanzar un error
        Demanda.findAll.mockRejectedValue(new Error('Error de prueba'));

        await expect(getAllDemands()).rejects.toThrow('Error de prueba');
    });
    
    
    
    //incluye modelos de la consulta (?)
    it('incluye los modelos relacionados en la consulta', async () => {
        // Verifica que la consulta incluye los modelos relacionados
        await getAllDemands();
        expect(Demanda.findAll).toHaveBeenCalledWith({
            include: expect.arrayContaining([
                { model: Juez },
                { model: PersonaNatural },
                // ...otros modelos
            ]),
        });
    });
});


