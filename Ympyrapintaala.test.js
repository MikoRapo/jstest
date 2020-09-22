const Ympyrapintaala = require('./Ympyrapintaala');

test('Ympyrä jonka säde 2', () => {
    expect(Ympyrapintaala(2)).toBe(12.56);
});



test('Säde joka on negatiivinen heittää poikkeuksen', () => {
    expect(() => {Ympyrapintaala(-1)}).toThrow("säde ei voi olla miinus");
});

test('Sädettä ei syötetty', () => {
    expect(() => {Ympyrapintaala()}).toThrow('ei lukuja');
});







