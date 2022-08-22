function bonus(input) {
    let starto = Number(input[0]);
    let finalo = Number(input[1]);
    let targeto = Number(input[2]);
    let indox = 0;
    
  let noequal = true;
  for (let i = starto; i <= finalo;i++){
    for (let k = starto; k <= finalo;k++){
     indox++;
     if (i + k == targeto) {
       console.log(`Combination N:${indox} (${i} + ${k} = ${targeto})`);
       noequal = false;
       
       return;
     }
     
     
    
    
    
    
    }
  
  }
  if (noequal) {
    console.log(`${indox} combinations - neither equals ${targeto}`);
    
  }
  }