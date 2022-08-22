function bonus(input) {
    let a  = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let result = 0;
    let diff = 0;

  for (let h = a; h <= b ; h++) {
       for (let m = a ; m <= b; m++ ) {
            result++;
            diff = h + m;
            if (diff == c) {
              console.log(`Combination N:${result} (${h} + ${m} = ${diff})`);
              return;
              
           
       }
       
    } 
  }
         console.log(`${result} combinations - neither equals ${c}`);  
          
  }