import { Food } from './food.model';

describe('Pruebas clase Food ', () => {
  /**
   * ---------Prueba parametrizada------------
   * 
   * Nombre: Prueba GetWholesaleCost
   * Objetivo: Verificar que el método getWholesaleCost retorne el costo (wholesaleCost) del alimento.
   * Datos de Prueba:
   *  - Food("Fresa", 100, 125, 'Fresa.jpg')
   *  - Food("Nutella", 200, 225, 'Nutella.jpg')
   *  - Food("Banano", 50, 75, 'Banano.jpg')
   * Resultado Esperado:
   *  - Para Fresa, el costo(wholesaleCost) es 100.
   *  - Para Nutella, el costo(wholesaleCost) es 200.
   *  - Para Banano, el costo (wholesaleCost) es 50.
   */
  describe('Prueba Parametrizada GetWholesaleCost', () => {
    const foodItems = [
      { food: new Food("Fresa", 100, 125, 'Fresa.jpg'), expectedCost: 100 },
      { food: new Food("Nutella", 200, 225, 'Nutella.jpg'), expectedCost: 200 },
      { food: new Food("Banano", 50, 75, 'Banano.jpg'), expectedCost: 50 }
    ];

    foodItems.forEach((testItem) => {
      it(`El costo (wholesaleCost) de ${testItem.food.getName()} es ${testItem.expectedCost}`, () => {
        expect(testItem.food.getWholesaleCost()).toBe(testItem.expectedCost);
      });
    });
  });
});