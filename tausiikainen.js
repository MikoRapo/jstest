function tausiikainen(a){
    //console.log(a);
    if(Number.isNaN(a)){
        throw new Error('ei lukuja');   
       }
    if(a === undefined || a === null){
        throw new error('ei lukuja');
    }
    let tausiikainen = Number(a)>17;
    //console.log(summ);
    
    if(Number.isNaN(tausiikainen)){
        throw new Error('ei lukuja');   
       }
    return tausiikainen;
}

module.exports = tausiikainen;