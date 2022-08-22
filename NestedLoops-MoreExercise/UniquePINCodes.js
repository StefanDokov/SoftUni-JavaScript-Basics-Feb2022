function bonus(input) {
    let purvo = Number(input[0]);
    let vtoro = Number(input[1]);
    let treto = Number(input[2]);
    
     for (let i = 1; i <= purvo;i++){
       if (i % 2 == 0){
       for(let j = 1;j <= vtoro;j++){
         if (j == 2|| j == 3 || j == 5 || j ==7){
         
         for(let k = 1;k <= treto;k++){
           if (k % 2 ==0) {
           console.log(`${i} ${j} ${k}`);
         }
       }
     }
     }
     }
   }
 
     } 