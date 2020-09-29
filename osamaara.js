function osamaara(a, b = 1){
  
    if(a === undefined || a === null){
        throw new Error('nolla parametria annettu');   
    } 
    if(b === undefined || b === null){
        throw new Error('nolla parametria annettu');   
    } 
    
    if(b === 0){
        throw new Error('Nollalla ei voi jakaa');   
    }   
   

 let osamaara = Number(a)/Number(b);
 
 if(Number.isNaN(osamaara)){
    throw new Error('ei lukuja');   
   }

    return osamaara;
}
module.exports = osamaara;