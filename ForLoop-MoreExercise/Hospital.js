function bonus(input) {
    
    let period = Number(input[0]);
    let doctorss = 7;
    let treat = 0;
    let untreat = 0;
    let day = 1;
    
    
    
      
    
    for (let i = 1; i <= period  ; i++) {
        let pacienti = Number(input[i]);
        
        
       
        
        if (pacienti < doctorss) {
            if (day % 3 == 0 && (treat < untreat)) {
                ++doctorss;
            }
            
            
            
             treat += pacienti;
             day += 1;
            


         }
         else if (pacienti == doctorss ){
            if (day % 3 == 0 && (treat < untreat)) {
                ++doctorss;
            }
             treat += doctorss;
             day += 1;
         }
         else if (pacienti > doctorss ){
            if (day % 3 == 0 && (treat < untreat)) {
                ++doctorss;
            }
            
             untreat += (pacienti - doctorss);
             treat += doctorss;
             day += 1;
            
         }
       
         
         
        


        
        } 
console.log(`Treated patients: ${treat}.`);
console.log(`Untreated patients: ${untreat}.`);

}