function bonus(input) {
     
    let basic = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printC = "";
    
    
     for (let i = 1; i <= basic; i++){
          for (let s = 1; s <= i; s++) {
             if (current > basic) {
                  isBigger = true;
                  break;
             }
            printC += current + " ";
            current++
          }
          console.log(printC);
          printC = "";
          if (isBigger) {
               break;
          }
     }
    
} 