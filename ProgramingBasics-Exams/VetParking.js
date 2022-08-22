function bonus(input) {
    let dni = Number(input[0]);
    let chasove = Number(input[1]);
   let cena = 0;
   let total = 0;
   for (let i = 1; i <= dni;i++){
     for (let k = 1; k <= chasove;k++){
      if (i % 2 == 0 && k % 2 == 1){
        cena += 2.50;
      }
      else if (i % 2 == 1 && k % 2 == 0){
        cena += 1.25;
      }
      else {
        cena += 1;
      }
     
     
     
   }
   
   total += cena;
   console.log(`Day: ${i} - ${cena.toFixed(2)} leva`);
     cena = 0
   
   }
   console.log(`Total: ${total.toFixed(2)} leva`)
   }