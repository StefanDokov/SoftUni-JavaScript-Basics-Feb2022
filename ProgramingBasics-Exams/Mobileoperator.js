function bonus(input) {
    let srok = input[0];
    let vid = input[1];
    let inet = input[2];
    let months = Number(input[3]);
   let cena = 0;
   
    if (srok == "one") {
      switch(vid){
           case "Small":
           cena = 9.98;
           break;
           case "Middle":
             cena = 18.99;
             break;
             case "Large":
               cena = 25.98;
               break;
               case "ExtraLarge":
                 cena = 35.99;
                 break;
            }
   }
   else if (srok = "two") {
     switch(vid){
       case "Small":
       cena = 8.58;
       break;
       case "Middle":
         cena = 17.09;
         break;
         case "Large":
           cena = 23.59;
           break;
           case "ExtraLarge":
             cena = 31.79;
             break;
        }
   }
   
    if (inet == "yes"){
      if (cena <= 10){
        cena += 5.50;
      }
      else if (cena <= 30){
        cena += 4.35;
      }
      else {
        cena += 3.85;
      }
   
    }
    let taksa = cena * months;
    if (srok == "two"){
      taksa *= 0.9625;
    }
    console.log(`${taksa.toFixed(2)} lv.`);
   }