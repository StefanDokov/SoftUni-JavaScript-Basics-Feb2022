function bonus(input) {
    let gosti = Number(input[0]);
    
    let bujet = Number(input[1]);
    
   let kozun = Math.ceil(gosti / 3);
   let qjca = gosti * 2;
   let sum = (kozun * 4) + (qjca * 0.45);
   let diff = Math.abs(bujet - sum);
  
   if (sum <= bujet) {
     console.log(`Lyubo bought ${kozun} Easter bread and ${qjca} eggs.`);
     console.log(`He has ${diff.toFixed(2)} lv. left.`);
   }
   else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
   }
  
  
  }