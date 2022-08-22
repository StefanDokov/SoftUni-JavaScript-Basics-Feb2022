function bonus(input) {
    let broj = Number(input[0]);
    let pone = 0;
    let ptwo = 0;
    let pthree = 0;
    for (let i = 1; i <= broj;i++){
     let chislo = Number(input[i]);
     if (chislo % 2 == 0){
       pone++;
     }
     if (chislo % 3 == 0){
       ptwo++;
     }
     if (chislo % 4 == 0){
       pthree++;
     }
   
    }
    let oneper = pone / broj * 100;
    let twoper = ptwo / broj * 100;
    let threeper = pthree / broj * 100;
    console.log(`${oneper.toFixed(2)}%`);
    console.log(`${twoper.toFixed(2)}%`);
    console.log(`${threeper.toFixed(2)}%`);
   
   
   }