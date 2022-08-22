function bonus(input) {
    let recordsec = Number(input[0]);
    let distance = Number(input[1]);
    let timem = Number(input[2]);
   
   let slowing = Math.floor(distance / 50);
   let slowingsecs = slowing * 30;
   let tring = distance * timem;
   let all = tring + slowingsecs;
   let diff = Math.abs(recordsec - all);
   
   if (all < recordsec) {
       console.log(`Yes! The new record is ${all.toFixed(2)} seconds.`);
   }
   else {
       console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
   }
   }