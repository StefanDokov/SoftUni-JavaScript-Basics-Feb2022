function bonus(input) {
  
    let name = input[0];
    let adult = Number(input[1]);
    let kids = Number(input[2]);
    let adpay = Number(input[3]);
    let taxpay = Number(input[4]);
  
    let kidspay = adpay - (adpay * 70 / 100);
    
   let adfull = adpay + taxpay;
   let kidfull = kidspay + taxpay;
     
   let sum = (adult * adfull) + (kids * kidfull);
   sum *= 0.2;
   console.log (`The profit of your agency from ${name} tickets is ${sum.toFixed(2)} lv.`)
  }