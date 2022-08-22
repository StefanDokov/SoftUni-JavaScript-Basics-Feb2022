function bonus(input) {
    let buget = Number(input[0]);
    let index = 2;
    let broj = Number(input[1]);
    let zor = true;
    for (let i = 1; i <= broj;i++){
      let ime = input[index];
      index++;
      let cena = Number(input[index]);
      index++;
      switch(ime) {
        case "Thrones":
             cena *= 0.5;
             break;
             case "Lucifer":
               cena *= 0.6;
               break;
               case "Protector":
                 cena *= 0.7;
                 break;
                 case "TotalDrama":
                   cena *= 0.8;
                   break;
                   case "Area":
                     cena *= 0.9;
                     break;
      }
      buget -= cena;
      
      
   
   
   
    }
    if (buget < 0) {
     console.log(`You need ${(Math.abs(buget)).toFixed(2)} lv. more to buy the series!`);
     zor = false;
     
   }
   if (zor) {
     console.log(`You bought all the series and left with ${buget.toFixed(2)} lv.`);
   }
   
   
   
   
   }