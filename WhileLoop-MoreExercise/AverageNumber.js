function bonus(input) {

    
    let sus = Number(input[0]);
    let sum = 0;
    
    
    
    for (let i = 1; i <= sus; i++){
         let sas = Number(input[i]);
         
         sum += sas;
         
    }
    let gg = sum / sus;
         console.log(gg.toFixed(2));
    
  }