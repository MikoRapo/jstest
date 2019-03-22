const ala = require('./ala');

test('Syöte ei numeromainen merkkijono "Minna", heittää poikkeuksen', () => {
    expect(() => {ala("minna")}).toThrow('ei lukua');
});

test('Ei anneta parametreja, heittää poikkeuksen', () => {
    expect(() => {ala()}).toThrow('nolla parametria annettu');
});

test('Syötetty luku on alle 0', () => {
    expect(() => {ala(-10)}).toThrow('Sivun pituus ei voi olla negatiivinen');
});

test('pinta-alan laskeminen onnistuu', () => {
    expect(ala(10.33,5)).toBe(25.83);
});