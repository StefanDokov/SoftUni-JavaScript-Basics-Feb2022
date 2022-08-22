function bonus(input) {
    let matchone = input[0];
    let matchtwo = input[1];
    let matchthree = input[2];
   let won = 0;
   let lost = 0;
   let draw = 0;
   
   
   let done = Number(matchone[0]);
   let gone = Number(matchone[2]);
   let dtwo = Number(matchtwo[0]);
   let gtwo = Number(matchtwo[2]);
   let dthree = Number(matchthree[0]);
   let gthree = Number(matchthree[2]);
   
   if (done > gone) {
     won++;
   }
   else if (done == gone){
     draw++;
   
   }
   else if (done < gone){
     lost++;
   }
   if (dtwo > gtwo) {
     won++;
   }
   else if (dtwo == gtwo){
     draw++;
   
   }
   else if (dtwo < gtwo){
     lost++;
   }
   if (dthree > gthree) {
     won++;
   }
   else if (dthree == gthree){
     draw++;
   
   }
   else if (dthree < gthree){
     lost++;
   }
   
   console.log(`Team won ${won} games.`);
   console.log(`Team lost ${lost} games.`);
   console.log(`Drawn games: ${draw}`);
   
   
   
   }