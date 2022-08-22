function bonus(input) {
    let starto = Number(input[0]);
    let finisho = Number(input[1]);
    let tex = "" + starto;
    let gg = "" + finisho;
    let finito = "";
    let sum = "";
    let now = "";
   for (let i = Number(tex[0]); i <= Number(gg[0]);i++){
     if (i % 2 !== 0) {
     for (let k = Number(tex[1]); k <= Number(gg[1]);k++){
       if (k % 2 !== 0) {
       for (let t = Number(tex[2]); t <= Number(gg[2]);t++){
         if (t % 2 !== 0) {
         for (let m = Number(tex[3]); m <= Number(gg[3]);m++){
               if (m % 2 !== 0) {
                 sum = `${i}${k}${t}${m} `;
                 
               }
               
               
               
               finito += sum;
               sum ="";
               
               
               
         }
        }
       }
      }
     }
     
    }
  }
   
  console.log(finito);
  }