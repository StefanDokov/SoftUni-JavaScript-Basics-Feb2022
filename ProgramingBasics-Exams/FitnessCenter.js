function bonus(input) {
    let notren = Number(input[0]);
    let tren = 0;
    let hrana = 0;
    let backer = 0;
    let chester = 0;
    let leger = 0;
    let abser = 0;
    let shaker = 0;
    let barer = 0;
    
    for (let i = 1; i <= notren;i++){
        let vid = input[i];
        switch(vid){
            case "Back":
                backer++;
                tren++;
                break;
                case "Chest":
                    chester++;
                    tren++;
                    break;
                    case "Legs":
                        leger++;
                        tren++;
                        break;
                        case "Abs":
                            abser++;
                            tren++;
                            break;
                            case "Protein shake":
                                shaker++;
                                hrana++;
                                break;
                                case "Protein bar":
                                    barer++;
                                    hrana++;
        }
    }
    let perten = tren / notren * 100;
    let perhra = hrana / notren * 100;
    console.log(`${backer} - back`);
    console.log(`${chester} - chest`);
    console.log(`${leger} - legs`);
    console.log(`${abser} - abs`);
    console.log(`${shaker} - protein shake`);
    console.log(`${barer} - protein bar`);
    console.log(`${perten.toFixed(2)}% - work out`);
    console.log(`${perhra.toFixed(2)}% - protein`);
  }