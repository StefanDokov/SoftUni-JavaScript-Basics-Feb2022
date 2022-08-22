function bonus(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let sum = 0;
    let daycena = 0;
    
    let den = 1;
  
    while (den <= days) {
      
      for (let k = 1; k <= hours;k++){
        
        if (den % 2 == 0 && k % 2 !== 0) {
          sum += 2.50;
          daycena += 2.50;
          
        }
        else if (den % 2 !== 0 && k % 2 == 0) {
          sum += 1.25;
          daycena += 1.25
          
  
        }
        else {
          sum += 1;
          daycena += 1;
          
        }
        
      }
      console.log(`Day: ${den} - ${daycena.toFixed(2)} leva`);
        daycena = 0;
        den++;
    }
   
    
  console.log(`Total: ${sum.toFixed(2)} leva`);
  
  
  
  
  
  
  }