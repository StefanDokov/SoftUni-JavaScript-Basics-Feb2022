function bonus(input) {

    let ime = input[0];
    let paket = input[1];
    let bileti = Number(input[2]);
    let cena = 0;
    switch(ime){
        case "John Wick": 
               if (paket == "Drink") {
                 cena = 12;
               }
               else if (paket == "Popcorn") {
                 cena = 15;
               }
               else if (paket == "Menu"){
                 cena = 19;
               }
               break;
               case "Star Wars":
                if (paket == "Drink") {
                  cena = 18;
                }
                else if (paket == "Popcorn") {
                  cena = 25;
                }
                else if (paket == "Menu"){
                  cena = 30;
                }
                break;
                case "Jumanji":
                  if (paket == "Drink") {
                    cena = 9;
                  }
                  else if (paket == "Popcorn") {
                    cena = 11;
                  }
                  else if (paket == "Menu"){
                    cena = 14;
                  }
                  break;
    }
    let sum = cena * bileti;
    if (ime == "Star Wars" && bileti >= 4){
      sum *= 0.7;
    }
    if (ime == "Jumanji" && bileti == 2){
      sum *= 0.85;
    }
    console.log(`Your bill is ${sum.toFixed(2)} leva.`);
    
    }