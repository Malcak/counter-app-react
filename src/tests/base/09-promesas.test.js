import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../base/08-imp-exp';

describe('Test in 09-promesas file', () => {
  test('should return a hero asynchronously', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });
  test('should return an error if the heroes by id does not exist', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
