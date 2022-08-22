function bonus(input) {
  
    let contchis = Number(input[0]);
    let count = 0;
    let sus = "";
    let gun = "";
    let savo = 0;
  
  
    for (let a = 1; a <= 9;a++){
      for (let b = 1;b <= 9;b++){
        for (let c = 1;c <= 9;c++){
          for (let d = 1;d <= 9;d++){
             if ((a < b) && (c > d)){
               let gg = (a * b) + (c * d);
               if (gg == contchis) {
                 count++;
                 sus += `${a}${b}${c}${d}`;
                 let fin = Number(sus);
                 
                 gun += `${fin} `;
                 sus = "";
                 if (count == 4) {
                   savo = fin;
                 }
               }
            }
    
          }
        }
      }
    }
    if (count >= 4){
      console.log (gun);
      console.log (`Password: ${savo}`);
    }
    else {
      if (count == 0) {
      console.log (`No!`);
      }
      else {
      console.log(gun);
      console.log (`No!`);
      }
    }
  }