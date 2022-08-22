function bonus(input) {
    let sum  = Number(input[0]);
    let gg = 0;

  for (let h = 0; h <= sum; h++) {
       for (let m = 0; m <= sum; m++ ) {
         for (let s = sum; s >= 0; s-- ){
              let all = h + m + s;
              if (all == sum) {
                   gg += 1;

              }
           
       }
  }
}
console.log(gg);  
} 