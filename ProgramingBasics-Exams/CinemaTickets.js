function bonus(input) {
    let index = 0
    let ime = input[index];
    index++;
    let stud = 0;
    let stand = 0;
    let kid = 0;
    
    
    let count = 0;
    
    while (ime !== "Finish"){
      if (ime == undefined){
        break;
      }
      let film = ime;
      let mesta = Number(input[index]);
      index++;
      
     let bilet = input[index];
     
     while (bilet !== "End") {
       if (bilet == "standard") {
         count++;
         stand++;
       }
       else if (bilet == "kid"){
         count++;
         kid++;
       }
       else if (bilet == "student"){
         stud++;
         count++;
       }
       
       if (count == mesta) {
         console.log(`${film} - ${(count / mesta * 100).toFixed(2)}% full.`);
         count = 0;
         index++;
         ime = input[index];
         index++;
         break;
       }
       
       index++;
       bilet = input[index];
       
     }
    if (bilet == "End"){
    console.log(`${film} - ${(count / mesta * 100).toFixed(2)}% full.`);
    count = 0;
    index++;
    ime = input[index];
    index++;
    
    }
    
    }
    
    if (ime == "Finish") {
      let counto = stand + kid + stud;
       console.log (`Total tickets: ${counto}`);
       let allstud = stud / counto * 100;
       let allstand = stand / counto * 100;
       let allkid = kid / counto * 100;
       console.log(`${allstud.toFixed(2)}% student tickets.`);
       console.log(`${allstand.toFixed(2)}% standard tickets.`);
       console.log(`${allkid.toFixed(2)}% kids tickets.`);
       
    }
    
    }