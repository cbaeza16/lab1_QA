import { Entree } from './entree.model';
import { Restaurant } from './restaurante.model';
import { Food } from './food.model'; // Asegúrate de importar la clase Food
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Pruebas clase Restaurante', () => {

  //Lista de ingredientes para Entree
  const foodList = new SortedListOfImmutables(null);
  foodList.add(new Food("Fresa", 100, 125, 'Fresa.jpg'));
  foodList.add(new Food("Nutella", 200, 225, 'Nutella.jpg'));
  foodList.add(new Food("Banano", 50, 75, 'Banano.jpg'));

  /**
   * Nombre: Prueba para validar placeOrder con alimentos del inventario
   * Objetivo: que placeOrder realice el pedido correctamente cuando los alimentos están en el inventario
   * Datos de Prueba:
   *  entree = new Entree("Crepa", foodList)
   *  El inventario contiene todos los alimentos necesarios para el Entree.
   * Resultado Esperado: que retorne true
   */
  it('Prueba para validar placeOrder con alimentos del inventario', () => {
    //Crear inventario
    const inventory = new SortedListOfImmutables(null);
    inventory.add(new Food("Fresa", 100, 125, 'Fresa.jpg'));
    inventory.add(new Food("Nutella", 200, 225, 'Nutella.jpg'));
    inventory.add(new Food("Banano", 50, 75, 'Banano.jpg'));

    //Crear restaurante con inventario
    const restaurant = new Restaurant('MyRestaurant', 1000000);
    restaurant.addShipmentToInventory(inventory);
    //Crear Enree
    const entree = new Entree('Crepa', foodList);
    expect(restaurant.placeOrder(entree)).toBe(true);
  });

  /**
   * Nombre: Prueba para validar placeOrder con alimentos que no están en el inventario
   * Objetivo: que placeOrder falle cuando los alimentos no están en el inventario
   * Datos de Prueba:
   *  entree = new Entree("Crepa", foodList)
   *  El inventario no contiene los alimentos necesarios.
   * Resultado Esperado: que retorne false
   */
  it('Prueba para validar placeOrder con alimentos que no están en el inventario', () => {
    //Crear restaurante sin inventario
    const restaurant = new Restaurant('MyRestaurant', 1000000);
    const entree = new Entree('Crepa', foodList);
    expect(restaurant.placeOrder(entree)).toBe(false);
  });
});
