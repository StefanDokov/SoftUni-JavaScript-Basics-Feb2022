function bonus(input) {
    let broj = Number(input[0]);
    let vidove = input[1];
    let dost = input[2];
    let cena = 0;
    let sum = 0;
   let isMore = true;
    if (broj < 10) {
      console.log(`Invalid order`);
      isMore = false;
    }
    
  
    switch(vidove) {
       case "90X130": cena = 110;
                      sum = cena * broj;
                      if (broj > 30 && broj <= 60) {
                        sum *= 0.95;
                        
                      }
                      else if (broj > 60){
                        sum *= 0.92;
                      }
                      break;
       case "100X150": cena = 140;
       sum = cena * broj;
       if (broj > 40 && broj <= 80) {
         sum *= 0.94;
         
       }
       else if (broj > 80){
         sum *= 0.9;
       }
       break; 
       case "130X180": cena = 190;
       sum = cena * broj;
                      if (broj > 20 && broj <= 50) {
                        sum *= 0.93;
                        
                      }
                      else if (broj > 50){
                        sum *= 0.88;
                      }
                      break;  
                      case "200X300": cena = 250;
                      sum = cena * broj;
                      if (broj > 25 && broj <= 50) {
                        sum *= 0.91;
                        
                      }
                      else if (broj > 50){
                        sum *= 0.86;
                      }
                      break;            
    }
    if (dost == "With delivery") {
      sum += 60;
    }
    if (broj > 99) {
      sum *= 0.96;
    }
    if (isMore) {
    console.log(`${sum.toFixed(2)} BGN`);
    }
    }