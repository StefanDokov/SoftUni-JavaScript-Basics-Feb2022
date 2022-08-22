function bonus(input) {
    let prihod = Number(input[0]);
    let index = 1;
    let ime = input[index];
    index++;
   let honorar = 0
   
   while (ime !== "ACTION") {
     let howlong = ime.length;
     
     if (howlong <= 15){
      honorar = Number(input[index]);
      index++
     }
     else {
      honorar = prihod * 20 / 100;
     }
      prihod -= honorar;
   
     if (prihod <= 0) {
       console.log(`We need ${(Math.abs(prihod)).toFixed(2)} leva for our actors.`);
       break;
     }
   ime = input[index];
   index++;
   
   
   }
   if (ime == "ACTION") {
    console.log(`We are left with ${prihod.toFixed(2)} leva.`);
   
   
   
   }
   
   
   
   
   }