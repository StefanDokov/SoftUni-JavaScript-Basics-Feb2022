function bonus(input) {
    let buget = Number(input[0]);
    let dest = input[1];
    let season = input[2];
    let dni = Number(input[3]);
    let cena = 0;
    switch(season){
        case "Winter": 
               if (dest == "Dubai") {
                 cena = 45000;
               }
               else if (dest == "Sofia") {
                 cena = 17000;
                 cena *= 1.25;
               }
               else if (dest == "London"){
                 cena = 24000;
               }
               break;
               
                case "Summer":
                  if (dest == "Dubai") {
                    cena = 40000;
                  }
                  else if (dest == "Sofia") {
                    cena = 12500;
                    cena *= 1.25;
                  }
                  else if (dest == "London"){
                    cena = 20250;
                  }
                  break;
    }
    let sum = cena * dni;
    if (dest == "Dubai"){
      sum *= 0.7;
    }
    
      let gg = Math.abs(buget - sum);
      if (sum < buget){
    console.log(`The budget for the movie is enough! We have ${gg.toFixed(2)} leva left!`);
    
    }
    else {
      console.log(`The director needs ${gg.toFixed(2)} leva more!`);
    }
    }