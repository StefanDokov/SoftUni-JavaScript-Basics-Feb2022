function bonus(input) {
    let vid = input[0];
    let sus = input[1];
    let broj = Number(input[2]);
    
    let cena = 0;
    
    switch(vid) {
        case "Espresso":
            if (sus == "Without") {
                cena = 0.9;
                
            }
            else if (sus == "Normal") {
                cena = 1;
            }
            else if (sus == "Extra"){
                cena = 1.2;
            }
            break;
            case "Cappuccino": 
            if (sus == "Without") {
                cena = 1;
                
            }
            else if (sus == "Normal") {
                cena = 1.2;
            }
            else if (sus == "Extra"){
                cena = 1.6;
            }
            break;
            case "Tea":
                if (sus == "Without") {
                    cena = 0.5;
                    
                }
                else if (sus == "Normal") {
                    cena = 0.6;
                }
                else if (sus == "Extra"){
                    cena = 0.7;
                }
                break;
    }
    
    let sum = cena * broj;
    if (sus == "Without") {
        sum *= 0.65;
    }
    if (vid == "Espresso" && broj >= 5){
        sum *= 0.75;
    }
    if (sum > 15) {
        sum *= 0.8;
    }
    console.log(`You bought ${broj} cups of ${vid} for ${sum.toFixed(2)} lv.`);
    
    
    
    }