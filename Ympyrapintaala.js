function Ympyrapintaala(a){
    //console.log(a);
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukuja');  
    }
    if(a === undefined || a === null){
        throw new Error('ei lukuja');
    }
     if(a < 0){
        throw new Error('säde ei voi olla miinus');   
    }  
   

    let Ympyrapintaala =Math.round(Number(a) * 3.14 * Number(a)* 100) / 100;
    //console.log(summ);
   
    
    return Ympyrapintaala;
}

module.exports = Ympyrapintaala;