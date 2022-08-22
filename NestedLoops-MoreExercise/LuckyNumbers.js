function bonus(input) {
  
    let cifra = Number(input[0]);
    let result = "";
    let final = "";
    let gg = 0;
    for(i = 1; i < 10; i++) {
      for(k = 1; k < 10; k++){
        for(w = 1; w < 10; w++){
          for(m = 1; m < 10; m++){
            let omg = i + k;
            let wtf = w + m;
            if (omg == wtf && cifra % omg == 0){
            result = `${i}${k}${w}${m}`;
            gg = Number(result);
            
            final += `${gg} `;
            }
            }
            
          }
          
        }
        
      }
      
      console.log(final);
      
    }