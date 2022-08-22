function bonus(input) {
    let filmname = input[0];
    let vidzala = input[1];
    let bileti = Number(input[2]);
    let bilet = 0;
    
    switch(filmname) {
        case "A Star Is Born":
              if (vidzala == "normal") {
                  bilet = 7.5;
              }
              else if (vidzala == "luxury") {
                  bilet = 10.5;
              }
              else if (vidzala == "ultra luxury"){
                  bilet = 13.5;
              }
              break;
              case "Bohemian Rhapsody":
                if (vidzala == "normal") {
                    bilet = 7.35;
                }
                else if (vidzala == "luxury") {
                    bilet = 9.45;
                }
                else if (vidzala == "ultra luxury"){
                    bilet = 12.75;
                }
                break;
                case "Green Book":
                    if (vidzala == "normal") {
                        bilet = 8.15;
                    }
                    else if (vidzala == "luxury") {
                        bilet = 10.25;
                    }
                    else if (vidzala == "ultra luxury"){
                        bilet = 13.25;
                    }
                    break;
                    case "The Favourite":
                        if (vidzala == "normal") {
                            bilet = 8.75;
                        }
                        else if (vidzala == "luxury") {
                            bilet = 11.55;
                        }
                        else if (vidzala == "ultra luxury"){
                            bilet = 13.95;
                        }
                        break;
    
    }
    let sum = bilet *bileti;
    console.log(`${filmname} -> ${sum.toFixed(2)} lv.`);
    }