import { getSaludo } from '../../base/02-template-string';

describe('Test in 02-template-string file', () => {
  test('should be "Hola Fernando"', () => {
    const name = 'Fernando';
    const greetings = getSaludo(name);
    expect(greetings).toBe('Hola ' + name);
  });

  test('should be "Hola User"', () => {
    const greetings = getSaludo();
    expect(greetings).toBe('Hola User');
  });
});
