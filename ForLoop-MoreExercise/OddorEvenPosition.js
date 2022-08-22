function bonus(input) {
  
    let num = Number(input[0]);
    
    let oddsum = 0;
    let oddmin = 10000;
    let oddmax = -10000;
    let evensum = 0;
    let evenmin = 10000;
    let evenmax = -10000;
    let counter = 1;
    let current = 0;
    
    
    
    
      
    for (let i = 1; i <= num; i++){
      let fix = Number(input[i]);

      counter++;
      if (counter % 2 == 0) {
        oddsum += fix;
        
         if (fix < oddmin) {
          oddmin = fix;
          }
        if (fix => oddmin) {
            current = fix;
        }
         if (current > oddmax){
            oddmax = current;
         }
        
        }  
        
        
        else {
        
        evensum += fix;
        
        if (fix < evenmin) {
          evenmin = fix;
        
        
        }
    if (fix => evenmin) {
             current = fix;
    }  
        if (fix > evenmax){
            evenmax = current;
         }
    
         }
}
   if (oddsum == 0){
   console.log(`OddSum=${oddsum.toFixed(2)},`);
   console.log(`OddMin=No,`);
   console.log(`OddMax=No,`);
   console.log(`EvenSum=${evensum.toFixed(2)},`);
   console.log(`EvenMin=No,`);
   console.log(`EvenMax=No`);
   
   }
   else if (evensum == 0) {
    console.log(`OddSum=${oddsum.toFixed(2)},`);
    console.log(`OddMin=${(oddmin).toFixed(2)},`);
    console.log(`OddMax=${oddmax.toFixed(2)},`);
    console.log(`EvenSum=${evensum.toFixed(2)},`);
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No`);
   }

 
    else {
       console.log(`OddSum=${oddsum.toFixed(2)},`);
       console.log(`OddMin=${(oddmin).toFixed(2)},`);
       console.log(`OddMax=${oddmax.toFixed(2)},`);
       console.log(`EvenSum=${evensum.toFixed(2)},`);
       console.log(`EvenMin=${evenmin.toFixed(2)},`);
       console.log(`EvenMax=${evenmax.toFixed(2)}`);
  }
  
}