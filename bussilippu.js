function bussilippu(a){
    if(a === null || a === undefined){
        throw new Error('nolla parametria annettu');  
    }
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukua');  
    }
    if(a < 0 ){
        throw new Error('Ikä ei voi olla negatiivinen'); 
    }
    if(a< 7){
     var b = "0€";   
     return b;
    } else if (a<16 && a>=7){
    var b = "1€";
    return b; 
    } else if (a>=16 && a<25){
    var b = "1.50€"; 
    return b;
    } else if (a>=25 && a<65){
    var b = "3€"; 
    return b;
    } else if (a>=65){
    var b = "1.50€"; 
    return b;
    }
}
module.exports = bussilippu;