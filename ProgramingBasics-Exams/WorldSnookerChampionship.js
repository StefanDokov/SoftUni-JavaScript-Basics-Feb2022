function bonus(input) {
  
    let etap = input[0];
    let typeticket = input[1];
    let countbilet = Number(input[2]);
    let snimka = input[3];
   let cost = 0;
   let ima = true;
   switch(etap){
      case "Quarter final":
          if (typeticket == "Standard"){
            cost = 55.50;
          }
          else if (typeticket == "Premium"){
            cost = 105.20;
          }
          else if (typeticket == "VIP") {
            cost = 118.90;
          }
          break;
          case "Semi final": 
          if (typeticket == "Standard"){
           cost = 75.88;
         }
         else if (typeticket == "Premium"){
           cost = 125.22;
         }
         else if (typeticket == "VIP") {
           cost = 300.40;
         }
         break;
        case "Final":
         if (typeticket == "Standard"){
           cost = 110.10;
         }
         else if (typeticket == "Premium"){
           cost = 160.66;
         }
         else if (typeticket == "VIP") {
           cost = 400;
         }
         break;
   }
    let sum = cost * countbilet;
    
    if (sum > 4000) {
      sum *= 0.75;
      ima = false;
    }
    else if (sum > 2500 && sum <= 4000) {
      sum *= 0.9;
    }
    if (snimka == "Y" && ima){
      let gg = countbilet * 40;
      sum += gg;
    }
    console.log(sum.toFixed(2));
   }