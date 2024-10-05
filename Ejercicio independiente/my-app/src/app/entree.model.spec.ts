import { Entree } from './entree.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Pruebas clase Entree', () => {
  /**
   * Nombre: Prueba para validar equals con el mismo nombre
   * Objetivo: Verificar que el método equals retorne true cuando el nombre de dos Entree es el mismo.
   * Datos de Prueba:
   *  entreeA = new Entree("Ensalada", list)
   *  entreeB = new Entree("Ensalada", list)
   * Resultado Esperado: que retorne true
   */
  it('Prueba para validar equals con el mismo nombre', () => {
    const list = new SortedListOfImmutables(null);
    const entreeA = new Entree('Ensalada', list);
    const entreeB = new Entree('Ensalada', list);
    expect(entreeA.equals(entreeB)).toBe(true);
  });

  /**
   * Nombre: Prueba para validar equals con nombre diferente
   * Objetivo: Verificar que el método equals retorne false cuando el nombre de dos objetos Entree es distinto.
   * Datos de Prueba:
   *  entreeA = new Entree("Pizza", list)
   *  entreeB = new Entree("Ensalada", list)
   * Resultado Esperado: que retorne false
   */
  it('Prueba para validar equals con nombre diferente', () => {
    const list = new SortedListOfImmutables(null);
    const entreeA = new Entree('Pizza', list);
    const entreeB = new Entree('Ensalada', list);
    expect(entreeA.equals(entreeB)).toBe(false);
  });
});
