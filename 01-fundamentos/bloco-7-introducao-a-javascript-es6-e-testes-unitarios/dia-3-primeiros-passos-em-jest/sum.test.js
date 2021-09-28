const sum = require('./sum');
// Teste se o retorno de sum(4, 5) é 9
describe('teste 1', () => {
  it('descrição', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
