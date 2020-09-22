const tausiikainen = require('./tausiikainen');


/*test('Syötteet ei numeromainen merkkijono "minna" ja " jaska"', ()=>{
    expect(() => {sum("Minna","Jaska")}).toThrow('ei lukuja');
});

test('Syötetty alle 0 ', ()=>{
    expect(ika).toBeWithRange(-9999.0);
});

test('Ei anneta parametreja, heittää poikkeuksen', ()=>{
        throw new error('nolla parametria annettu');
        expect(() => {sum()}).toThrow(' ');
});
*/
test('Henkilö täysiikäinen', () => {
    expect(tausiikainen(18)).toBe(true);
});


test('Henkilö alaikäinen', () => {
    expect(tausiikainen(17)).toBe(false);
});


test('Henkilö öö', () => {
    expect(tausiikainen(-2)).toBe(false);
});



test('Ikää ei syötetty', () => {
    expect(tausiikainen("ei lukuja")).toBe(false);
});
