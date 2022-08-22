function bonus(input) {
    let notur = Number(input[0]);
    let pointsi = Number(input[1]);
    let k = 1 + notur;
    let spech = 0;
    let alli = 0;
    for (let i = 2; i <= k;i++){
     let resul = input[i];
     switch(resul){
         case "W":
             alli += 2000;
             spech++;
             break;
             case "F":
                 alli += 1200;
                 break;
                 case "SF":
                     alli += 720;
                     break;
     }    
  
  }
  let porcent = spech / notur * 100;
  let sred = alli / notur;
  let totala = pointsi + alli;
  console.log(`Final points: ${totala}`);
  console.log(`Average points: ${Math.trunc(sred)}`);
  console.log(`${porcent.toFixed(2)}%`);
    
  }