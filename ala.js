function ala(a,b){
  
    if(a === undefined || a === null){
        throw new Error('nolla parametria annettu');   
    } 
    
    if(a< 0){
        throw new Error('Sivun pituus ei voi olla negatiivinen');   
    }   

 var ala = Number(a)*Number(b)/2;
 if(Number.isNaN(ala)){
    throw new Error('ei lukua');   
   }
var round = Math.round(ala * 100) / 100;
    return round;
}
module.exports = ala;