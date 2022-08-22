function bonus(input) {
    let dni = Number(input[0]);
    let index = 1;
    let pobeda = 20;
   let winratio = 0;
   let loseratio = 0;
    let igra = input[index];
    let daypast = 1;
    
    let all = 0;
    let allwin = 0;
    let alllose = 0;
    let pari = 0;
   
   while (daypast <= dni) {
       pari = 0;
       let igra = input[index];
       index++;
     while (igra !== "Finish") {
       
       
       
       let result = input[index];
       
       if (result == "win") {
       pari += pobeda;
       winratio++;
       }
       else if (result == "lose") {
       loseratio++;
       }
      
       
   
       igra = input[index];
       index++;
   }
   
   
   if (winratio > loseratio) {
       pari *= 1.1;
   }
   
   all += pari;
   
   allwin += winratio;
   alllose += loseratio;
   winratio = 0;
   loseratio = 0;
   
   
   
   daypast++;
   
   }
   if (allwin > alllose) {
       all *= 1.2;
       console.log(`You won the tournament! Total raised money: ${all.toFixed(2)}`);
   }
   else {
       console.log(`You lost the tournament! Total raised money: ${all.toFixed(2)}`);
   }
   
   
   
   
   
   
   }