const tausiikainen = require('./tausiikainen');



test('Henkilö täysiikäinen', () => {
    expect(tausiikainen("18")).toBe(true);
});

test('Henkilö alaikäinen 2', () => {
    expect(tausiikainen("17.5")).toBe(false);
});


test('Henkilö alaikäinen', () => {
    expect(tausiikainen("17")).toBe(false);
});



test('Ikää ei syötetty', () => {
    expect(() => {tausiikainen()}).toThrow('ei lukuja');
});

test('Ikä joka on negatiivinen heittää poikkeuksen', () => {
    expect(() => {tausiikainen("-1")}).toThrow('Ikä ei voi olla miinus');
});

