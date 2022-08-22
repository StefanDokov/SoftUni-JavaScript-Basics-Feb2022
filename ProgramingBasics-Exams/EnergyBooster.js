function bonus(input) {
    let plod = input[0];
    let size = input[1];
    let broj = Number(input[2]);
    let count = 0;
    let vsi = 0;
    switch(plod) {
        case "Watermelon": 
                           if (size == "small") {
                            count = 2;
                            vsi = count * 56;
                           }
                           else if (size == "big") {
                               count = 5;
                               vsi = count * 28.70;
                           }
                           break;
                           case "Mango": 
                           if (size == "small") {
                               count = 2;
                               vsi = count * 36.66;
                              }
                              else if (size == "big") {
                                  count = 5;
                                  vsi = count * 19.60;
                              }
                              break;
                          case "Pineapple": 
                          if (size == "small") {
                           count = 2;
                           vsi = count * 42.10;
                          }
                          else if (size == "big") {
                              count = 5;
                              vsi = count * 24.80;
                          }
                          break;
                          case "Raspberry": 
                          if (size == "small") {
                           count = 2;
                           vsi = count * 20;
                          }
                          else if (size == "big") {
                              count = 5;
                              vsi = count * 15.20;
                          }
                          break;
    }
    let supreme = broj * vsi;
    if (supreme >= 400 && supreme <= 1000) {
        supreme *= 0.85;
    }
    else if (supreme > 1000) {
        supreme *= 0.5;
    }
    console.log(`${supreme.toFixed(2)} lv.`);
   }