function bonus(input) {
    let n = Number(input[0]);
    
    let printfinal = "";
    
    for (let i = 1111; i < 10000; i++){
       let j = "" + i;
       let printo = "";
       for (let s = 0; s < j.length; s++){
         let wtf = Number(j.charAt(s));
         
         if (n % wtf == 0) {
           printo += wtf;
           
           
         }
         
       }
       if (printo == i){
         printfinal += `${i} `;
         
         
     }  
         
          
   }
    
       console.log(printfinal);
 }