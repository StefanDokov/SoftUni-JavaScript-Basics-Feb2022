function bonus(input) {
    let taksa = Number(input[0]);
   let kecove = taksa * 0.6;
   let ekip = kecove * 0.8;
   let topka = ekip / 4;
   let extra = topka / 5;
   
   let sum = taksa + kecove + ekip + topka + extra;
   console.log(sum.toFixed(2));
   
   
   
   
   
   
   
   }