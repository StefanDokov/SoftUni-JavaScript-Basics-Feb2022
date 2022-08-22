function bonus(input) {
    let sector = input[0];
    let reda = Number(input[1]);
    let mesta = Number(input[2]);
    let chislo = 0;
    
    let startSector = sector.charCodeAt(chislo);
    let mesto = mesta + 2;
    
    let min = 0;
    let counter = 0;
    
  for (let i = 65; i <= startSector;i++){
    reda++;
    for(let k = 1; k <= reda - 1;k++){
      if (k % 2 !== 0) {
        min = mesta;
      }
      else {
        min = mesto;
      }
      
  
       for (let n = 1; n <= min;n++){
       
        counter++;
       
       let eee = String.fromCharCode(96 + n);
  
      let nachalo = String.fromCharCode(i);
      
      console.log(`${nachalo}${k}${eee}`);
      
        }
    }
    
  }
  console.log(counter);
  
  
  
  
  
  
  
  }