import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Test in 05-funciones file', () => {
  test('should return the same object', () => {
    const usertest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();
    expect(user).toEqual(usertest);
  });

  test('should return the object with username USER', () => {
    const name = 'USER';
    const user = getUsuarioActivo(name);
    expect(user).toEqual({
      uid: 'ABC567',
      username: name,
    });
  });
});
