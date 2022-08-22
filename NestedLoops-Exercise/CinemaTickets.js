function bonus(input) {
    let index = 0;
    let inputLine = input[index];
    let standcount = 0;
    let kidcount = 0;
    let studentcount = 0;
    
    while (inputLine !== "Finish") {
         let moviename = inputLine;
         index++;
         let alltickets = Number(input[index])
         let freespace = alltickets;
         index++;
         let bilet = input[index];
         
         while (bilet !== "End") {
         switch(bilet) {
           case "standard":
             standcount += 1;
             break;
             case "kid":
               kidcount += 1;
               break;
               case "student":
                 studentcount += 1;
         }
         freespace--;
         if (freespace == 0) {
           break;
         }
         index++;
         bilet = input[index];
    }
    let boughttickets = alltickets - freespace;
    let percentfull = boughttickets / alltickets * 100;
    console.log(`${moviename} - ${percentfull.toFixed(2)}% full.`);
    index++;
    inputLine = input[index];
  }
  let allbought = standcount + kidcount + studentcount;
  console.log(`Total tickets: ${allbought}`);
  console.log(`${(studentcount / allbought * 100).toFixed(2)}% student tickets.`);
  console.log(`${(standcount / allbought * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(kidcount / allbought * 100).toFixed(2)}% kids tickets.`);
  
  }