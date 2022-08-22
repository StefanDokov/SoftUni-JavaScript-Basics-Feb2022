function bonus(input) {
    let bujet = Number(input[0]);
    let index = 1;
    let vid = input[index];
    index++;
    let count = 0;
   let sum = 0;
    while (vid !== "Stop"){
      count++;
       let cena = Number(input[index]);
       index++;
       if (count % 3 == 0){
         cena *= 0.5;
       }
   
   if (bujet < cena){
     console.log(`You don't have enough money!`);
     console.log(`You need ${Math.abs(bujet - cena).toFixed(2)} leva!`);
     break;
   }
   sum += cena;
   bujet -= cena;
   vid = input[index];
   index++;
   
    }
    if (vid == "Stop") {
     console.log(`You bought ${count} products for ${sum.toFixed(2)} leva.`);
    }
    
   
   }