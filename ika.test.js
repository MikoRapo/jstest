const sum = require('./ika');


test('Syötteet ei numeromainen merkkijono "minna" ja " jaska"', ()=>{
    expect(() => {sum("Minna","Jaska")}).toThrow('ei lukuja');
});

test('Syötetty alle 0 ', ()=>{
    expect(ika).toBeWithRange(-9999.0);
});

test('Ei anneta parametreja, heittää poikkeuksen', ()=>{
        throw new error('nolla parametria annettu');
        expect(() => {sum()}).toThrow(' ');
});
