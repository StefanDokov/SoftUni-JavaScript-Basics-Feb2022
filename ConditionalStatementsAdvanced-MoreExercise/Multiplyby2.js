function bonus(input) {
    let index = 0;
    let first = Number(input[index]);
    let rezul = 0;
      
    
    for(let i = 0; i < 100  ; i++) {
        let result = Number(input[index++]);
       if (result < 0) {
           console.log(`Negative number!`);
           break;
       }
       else {
           rezul = result * 2;
           console.log(`Result: ${rezul.toFixed(2)}`);
       }
      }




}