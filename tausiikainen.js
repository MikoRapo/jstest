function tausiikainen(a){
    //console.log(a);
    if(Number.isNaN(Number(a))){
        throw new Error('ei lukuja');  
    }
    if(a === undefined || a === null){
        throw new Error('ei lukuja');
    }
     if(a < 0){
        throw new Error('Ikä ei voi olla miinus');   
    } 
 
    
    

    let tausiikainen = Number(a)>=18;
    //console.log(summ);
   
    
    return tausiikainen;
}

module.exports = tausiikainen;