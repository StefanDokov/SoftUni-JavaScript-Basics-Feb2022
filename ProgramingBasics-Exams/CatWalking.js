function bonus(input) {
    let minutes = Number(input[0]);
    let razhodki = Number(input[1]);
    let calories = Number(input[2]);
   
   let enog = calories / 2;
   let fullday = (minutes * razhodki) * 5;
   
   if (fullday >= enog) {
       console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${fullday}.`);
   }
   else {
       console.log(`No, the walk for your cat is not enough. Burned calories per day: ${fullday}.`);
   }
   
   
   
   
   }