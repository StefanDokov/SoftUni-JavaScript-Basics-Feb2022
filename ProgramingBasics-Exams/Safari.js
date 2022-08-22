function bonus(input) {
    let bujet = Number(input[0]);
    let litri = Number(input[1]);
    let day = input[2];
    let eksk = 100;
   
    let litriall = litri * 2.1;
    let all = litriall + eksk;
    
    if (day == "Saturday") {
      all *= 0.9;
    }
    else if (day == "Sunday"){
      all *= 0.8;
    }
    let diff = Math.abs(bujet - all);
    if (all < bujet) {
      console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    }
    else {
      console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`)
    }
   
   }