function bonus(input) {
    let city = input[0];
    let vid = input[1];
    let vip = input[2];
    let dni = Number(input[3]);
    
    let cena = 0;
    let nula = true;
    
    switch(city) {
       case "Bansko":
       case "Borovets": 
           if (vid == "withEquipment") {
               cena = 100;
               if (vip == "yes") {
                   cena *= 0.9;
               }
               
           }
           else if (vid == "noEquipment") {
               cena = 80;
               if (vip == "yes"){
                  cena *= 0.95;
               }
               
           }
           else {
            console.log(`Invalid input!`);
            nula = false;
            return;
           }
           break;
           case "Varna":
            case "Burgas":
                if (vid == "withBreakfast") {
                    cena = 130;
                    if (vip == "yes") {
                        cena *= 0.88;
                    }
                    
                }
                else if (vid == "noBreakfast") {
                    cena = 100;
                    if (vip == "yes"){
                       cena *= 0.93;
                    }
                }
                else {
                    console.log(`Invalid input!`);
                    nula = false;
                    return;
                   }
               break;
               default:
                   console.log(`Invalid input!`);
                   nula = false;
                   return;
                   
                   
    
    }
    
    if (dni < 1) {
        console.log(`Days must be positive number!`);
        nula = false;
    }
    if (dni >= 7) {
       dni -= 1;
        
    }
    let sum = dni * cena;
    if (nula) {
    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
    }
    
    }