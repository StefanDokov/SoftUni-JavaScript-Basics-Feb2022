function bonus(input) {
    let gosti = Number(input[0]);
    let kuvert = Number(input[1]);
    let bujet = Number(input[2]);
    
    
   if (gosti >= 10 && gosti <= 15){
     kuvert *= 0.85;
   }
  else if (gosti > 15 && gosti <= 20){
    kuvert *= 0.8;
  }
  else if (gosti > 20){
    kuvert *= 0.75;
  }
  bujet *= 0.9;
  
  let sum = gosti * kuvert;
  let diff = Math.abs(bujet - sum);
  
  if (sum <= bujet){
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  }
  else {
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  }
  
  
  }