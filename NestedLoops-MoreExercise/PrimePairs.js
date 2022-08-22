function bonus(input) {
  
    let nachaloedno = Number(input[0]);
    let nachalodve = Number(input[1]);
    let diffedno = Number(input[2]);
    let diffdve = Number(input[3]);
    let chislop = 0;
    let chislon = 0;
    let sum ="";
  
  
   let purvo = (nachaloedno + diffedno);
   let vtoro = (nachalodve + diffdve);
  
   for (let i = nachaloedno; i <= purvo;i++){
     
     
    for (let k = nachalodve; k <= vtoro;k++){
      let isPrime = true;
      for (let n = 2; n < i;n++){
        if (i % n == 0) {
          isPrime = false;
          break;
        }
      }
       for (let m = 2; m < k;m++){
         if (k % m == 0) {
           isPrime = false;
           break;
         }
       }
      if (isPrime) {
       console.log(`${i}${k}`);
        
      }
   
      
     }
     
   }
   
     
  }