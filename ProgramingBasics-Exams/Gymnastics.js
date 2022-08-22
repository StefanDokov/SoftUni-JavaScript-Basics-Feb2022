function bonus(input) {
  
    let country = input[0];
    let ured = input[1];
    let difficulty = 0;
    let doing = 0;
   
    switch(country) {
       case "Russia":
                    if (ured == "ribbon"){
                      difficulty = 9.100;
                      doing = 9.400;
                    }
                    else if (ured == "hoop"){
                      difficulty = 9.300;
                      doing = 9.800;
                    }
                    else if (ured == "rope"){
                      difficulty = 9.600;
                      doing = 9.000;
                    }
                    break;
                    case "Bulgaria":
                     if (ured == "ribbon"){
                       difficulty = 9.600;
                       doing = 9.400;
                     }
                     else if (ured == "hoop"){
                       difficulty = 9.550;
                       doing = 9.750;
                     }
                     else if (ured == "rope"){
                       difficulty = 9.500;
                       doing = 9.400;
                     }
                     break;
                     case "Italy": 
                     if (ured == "ribbon"){
                       difficulty = 9.200;
                       doing = 9.500;
                     }
                     else if (ured == "hoop"){
                       difficulty = 9.450;
                       doing = 9.350;
                     }
                     else if (ured == "rope"){
                       difficulty = 9.700;
                       doing = 9.150;
                     }
                     break;
    }
    let full = difficulty + doing;
    let diff = 20 - full;
    let perdiff = diff / 20 * 100;
    console.log(`The team of ${country} get ${full.toFixed(3)} on ${ured}.`);
    console.log(`${perdiff.toFixed(2)}%`);
    
    
   }