function bonus(input) {
    let destinaciq = input[0];
    
    let date = input[1];
    let noshtyvki = Number(input[2]);
    let cena = 0;
  
    switch(destinaciq){
      case "France":
        if (date == "21-23"){
           cena = 30;
        }
        else if (date == "24-27"){
          cena = 35;
        }
        else if (date == "28-31"){
          cena = 40;
        }
        break;
        case "Italy":
          if (date == "21-23"){
            cena = 28;
         }
         else if (date == "24-27"){
           cena = 32;
         }
         else if (date == "28-31"){
           cena = 39;
         }
         break;
         case "Germany":
          if (date == "21-23"){
            cena = 32;
         }
         else if (date == "24-27"){
           cena = 37;
         }
         else if (date == "28-31"){
           cena = 43;
         }
         break;
  
    }
    let sum = cena * noshtyvki;
    console.log(`Easter trip to ${destinaciq} : ${sum.toFixed(2)} leva.`);
  }