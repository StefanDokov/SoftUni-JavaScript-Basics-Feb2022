function bonus(input) {
    let index = 0;
    let yes = input[index];
    index++;
    
    sumpr = 0;
    sumnopr = 0;
    
    while (yes !== "stop") {
       let gg = Number(yes);
       if (gg < 0) {
            console.log(`Number is negative.`);

       }
       else {
    let isprime = true;
       for ( let i = 2; i < gg; i++) {
            if(gg % i == 0) {
                 sumnopr += gg;
                 isprime = false;
                 break;
            }
         }
           if (isprime){
              sumpr += gg;
           } 
    }    
        
            
       
        
                 
       yes = input[index];
       index++;
       
    
}  
if (yes == "stop") {
console.log(`Sum of all prime numbers is: ${sumpr}`);
console.log(`Sum of all non prime numbers is: ${sumnopr}`);
}
}