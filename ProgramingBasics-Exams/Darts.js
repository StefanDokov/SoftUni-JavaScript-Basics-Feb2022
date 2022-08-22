function bonus(input) {
    let name = input[0];
    let nachalo = 301;
    let index = 1;
    let shot = input[index];
    index++;
    let gadu = 0;
    let tries = 0;
    let untries = 0;
    while (shot !== "Retire"){
        let vid = shot;
        let pointsi = Number(input[index]);
        index++; 
        switch(vid){
          case "Single":
              gadu = pointsi;
              break;
              case "Double":
                  gadu = 2 * pointsi;
                  break;
                  case "Triple":
                      gadu = 3 * pointsi;
                      break;
        }
        if (gadu > nachalo){
            untries++;
           
        }
        else if (gadu <= nachalo){
         nachalo -= gadu;
         tries++;
         if (nachalo == 0){
           console.log(`${name} won the leg with ${tries} shots.`);
           break;
         }
     }
     shot = input[index];
     index++;
  
    }
    if (shot == "Retire"){
        console.log(`${name} retired after ${untries} unsuccessful shots.`);
        
    }
   
  }