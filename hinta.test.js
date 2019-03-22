const hinta = require('./hinta');

test('Syöte ei numeromainen merkkijono "Minna", heittää poikkeuksen', () => {
    expect(() => {hinta("minna")}).toThrow('ei lukua');
});

test('Ei anneta parametreja, heittää poikkeuksen', () => {
    expect(() => {hinta()}).toThrow('nolla parametria annettu');
});

test('Syötetty luku on alle 0', () => {
    expect(() => {hinta(-10)}).toThrow('Hinta ei voi olla negatiivinen');
});

test('Hinta on alle 100', () => {
    expect(hinta(55)).toBe(68.2);
});

test('Hinta on väliltä 100 - 200€', () => {
    expect(hinta(150)).toBe(176.7);
});

test('Hinta on väliltä 201 - 500€', () => {
    expect(hinta(300)).toBe(334.8);
});

test('Hinta on enemmän kuin 500€', () => {
    expect(hinta(550)).toBe(579.7);
});

test('Hinta on tasan 500€', () => {
    expect(hinta(500)).toBe(527);
});

test('Hinta on tasan 201€', () => {
    expect(hinta(201)).toBe(224.316);
});

test('Hinta on tasan 100€', () => {
    expect(hinta(100)).toBe(117.8);
});