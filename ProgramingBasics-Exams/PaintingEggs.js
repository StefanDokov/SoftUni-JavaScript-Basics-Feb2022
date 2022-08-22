function bonus(input) {
    let razmer = input[0];
    let cvqt = input[1];
    let broj = Number(input[2]);
    let cena = 0;
  
  
    switch(razmer){
      case "Large":
        if (cvqt == "Red"){
         cena = 16;
        }
        else if (cvqt == "Green"){
          cena = 12;
        }
        else if (cvqt == "Yellow"){
          cena = 9;
        }
        break;
        case "Medium":
          if (cvqt == "Red"){
            cena = 13;
           }
           else if (cvqt == "Green"){
             cena = 9;
           }
           else if (cvqt == "Yellow"){
             cena = 7;
           }
           break;
           case "Small":
            if (cvqt == "Red"){
              cena = 9;
             }
             else if (cvqt == "Green"){
               cena = 8;
             }
             else if (cvqt == "Yellow"){
               cena = 5;
             }
             break;
  
    }
    let sum = cena * broj;
    sum *= 0.65;
    console.log(`${sum.toFixed(2)} leva.`);
  }