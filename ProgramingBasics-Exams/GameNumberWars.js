function bonus(input) {
  
    let nameone = input[0];
    let nametwo = input[1];
    
    let index = 2;
   
    let pointsone = 0;
    let pointstwo = 0;
    let equal = 0;
   
   let points = input[index];
   index++;
   while (points != "End of game") {
     let cardone = Number(points);
     let cardtwo = Number(input[index]);
     index++;
   
   let diff = Math.abs(cardone - cardtwo);
   if (equal == 1) {
     if (cardone > cardtwo) {
       console.log(`Number wars!`);
       console.log(`${nameone} is winner with ${pointsone} points`);
       break;
     }
     else if (cardone < cardtwo) {
       console.log(`Number wars!`);
       console.log(`${nametwo} is winner with ${pointstwo} points`);
       break;
     }
   }
   if (cardone > cardtwo) {
     pointsone += diff;
     
   }
   else if (cardone < cardtwo) {
     pointstwo += diff;
     
   }
   else if (cardone == cardtwo){
     equal++;
     
   
   }
   
   points = input[index];
   index++;
   
   
   }
   if (points == "End of game"){
     console.log(`${nameone} has ${pointsone} points`);
     console.log(`${nametwo} has ${pointstwo} points`);
   }
   
   
   
   
   }