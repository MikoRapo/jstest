const bussilippu = require('./bussilippu');
test('Syöte ei numeromainen merkkijono "Minna", heittää poikkeuksen', () => {
    expect(() => {bussilippu("minna")}).toThrow('ei lukua');
});

test('Ei anneta parametreja, heittää poikkeuksen', () => {
    expect(() => {bussilippu()}).toThrow('nolla parametria annettu');
});

test('Syötetty luku on alle 0', () => {
    expect(() => {bussilippu(-10)}).toThrow('Ikä ei voi olla negatiivinen');
});

test('ikä alle 7', () => {
    expect(bussilippu(5)).toBe("0€");
});

test('ikä on alle 16', () => {
    expect(bussilippu(10)).toBe("1€");
});

test('ikä on 16-25', () => {
    expect(bussilippu(20)).toBe("1.50€");
});

test('ikä on yli 25', () => {
    expect(bussilippu(28)).toBe("3€");
});

test('ikä on yli 65', () => {
    expect(bussilippu(70)).toBe("1.50€");
});

test('ikä on tasan 7', () => {
    expect(bussilippu(7)).toBe("1€");
});

test('ikä on tasan 16', () => {
    expect(bussilippu(16)).toBe("1.50€");
});

test('ikä on tasan 25', () => {
    expect(bussilippu(25)).toBe("3€");
});

test('ikä on tasan 65', () => {
    expect(bussilippu(65)).toBe("1.50€");
});