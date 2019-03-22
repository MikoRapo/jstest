const osamaara = require('./osamaara');

test('Jakaminen onnistuu', () => {
    expect(osamaara(10,2)).toBe(5);
});

test('Ei anneta parametreja, heittää poikkeuksen', () => {
    expect(() => {osamaara()}).toThrow('nolla parametria annettu');
});

test('Syötteet ei numeromaisia merkkijonoja "Minna"+"Jaska", heittää poikkeuksen', ()=> {
    expect(() => {osamaara("minna","jaakko")}).toThrow('ei lukuja');
});

test('Syöte nolla, jota ei voi jakaa, heittää poikkeuksen', () => {
    expect(() => {osamaara(0)}).toThrow("Nollalla ei voi jakaa");
});