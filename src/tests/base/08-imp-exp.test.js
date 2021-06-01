import heroes, { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Test in 08-imp-exp file', () => {
  test('should return an hero per id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((h) => h.id === id);
    expect(hero).toEqual(heroData);
  });
  test('should return undefined if the hero does not exist', () => {
    const id = 10;
    const hero = getHeroeById(id);
    expect(hero).toEqual(undefined);
  });
  test('should return an array with dc heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const dcheroes = heroes.filter((h) => h.owner === owner);
    expect(heroes).toEqual(dcheroes);
  });
  test('should return an array with the 2 marvel heroes', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
  });
});
