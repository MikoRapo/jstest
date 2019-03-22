function hinta(a,b = 0.24){
    if(a === undefined || a === null){
        throw new Error('nolla parametria annettu');   
    } 
    if(a< 0){
        throw new Error('Hinta ei voi olla negatiivinen');   
    } 
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukua');   
       }  
if(a<100){
var tuote = a + (a * b);
} else if(a>=100 && a<=200){
    var alennettuhinta = a - (a * 0.05);
    var tuote = alennettuhinta + (alennettuhinta * 0.24)
} else if(a>=201 && a<500){
    var alennettuhinta = a - (a * 0.10);
    var tuote = alennettuhinta + (alennettuhinta * 0.24)    
} else if(a>=500){
    var alennettuhinta = a - (a * 0.15);
    var tuote = alennettuhinta + (alennettuhinta * 0.24)    
} 
return tuote;
}
module.exports = hinta;