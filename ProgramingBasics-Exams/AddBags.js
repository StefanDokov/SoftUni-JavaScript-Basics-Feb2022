function bonus(input) {
  
  
    let overtwenty = Number(input[0]);
    let kgsbag = Number(input[1]);
    let daystill = Number(input[2]);
    let bagsnum = Number(input[3]);
  
    let cena = 0;
  
    if (kgsbag < 10) {
      overtwenty *= 0.2;
    }
     else if (kgsbag >= 10 && kgsbag <= 20) {
       overtwenty *= 0.5;
     }
     else {
       overtwenty = overtwenty;
     }
     if (daystill > 30) {
       overtwenty += overtwenty * 0.1;
     }
     else if (daystill <= 30 && daystill >= 7) {
       overtwenty += overtwenty * 0.15;
     }
     else {
       overtwenty += overtwenty * 0.4;
     }
     let sum = bagsnum * overtwenty;
     console.log(`The total price of bags is: ${sum.toFixed(2)} lv.`);
    
  }