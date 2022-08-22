function bonus(input) {
    let starto = Number(input[0]);
    let endo = Number(input[1]);
    
    let sum = "";
    
    for (let i = starto; i <= endo; i++) {
      for (let j = starto; j <= endo; j++){
        for (let w = starto; w <= endo; w++){
          for (let c = starto; c <= endo; c++){
              let duma = `${i}${j}${w}${c}`;
              let cifri = Number(duma);
              let numero = "" + cifri;
              let firsto = Number(numero[0]);
              let two = Number(numero[1]);
              let tri = Number(numero[2]);
              let lasto = Number(numero[3]);
              let diffo = two + tri;
              if (firsto % 2 == 0 && lasto % 2 !== 0 && firsto > lasto && diffo % 2 == 0) {
                sum += `${cifri} `;
                
              }
              else if (firsto % 2 !== 0 && lasto % 2 == 0 && firsto > lasto && diffo % 2 == 0){
                sum += `${cifri} `;
                
              }
          }
        }
        
      }
      
    }
    
    console.log(sum);
      
      
      
      
  }