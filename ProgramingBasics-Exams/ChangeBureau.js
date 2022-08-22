function bonus(input) {
    let bit = 1168;
    let dol = 1.76;
    let eur = 1.95;
    let ioan = 0.15 * dol;
   
   let numbit = Number(input[0]);
   let numion = Number(input[1]);
   let comis = Number(input[2]);
   
   let sum = ((numbit * bit) + (ioan * numion)) / eur;
   let finol = sum  - (sum * comis / 100);
   console.log(finol.toFixed(2));
   }