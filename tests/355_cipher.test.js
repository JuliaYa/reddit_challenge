const cipher = require('../355_cipher');

test('cipher message right way', () => {
  expect(cipher('snitch', 'thepackagehasbeendelivered')).toBe('lumicjcnoxjhkomxpkwyqogywq');
});