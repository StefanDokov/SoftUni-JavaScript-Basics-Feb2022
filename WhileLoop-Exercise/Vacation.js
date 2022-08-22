function bonus(input) {

    let index = 2;
    let moneyNeeded = Number(input[0]);
    let pari = Number(input[1]);
    let dni = 0;
    
    let dnitwo = 0;
    
    while(pari < moneyNeeded) {
        let dejstwie = input[index];
        index++;
        let kolko = Number(input[index]);
        dni++;
        switch(dejstwie){
            case "spend":
                pari -= kolko;
                if (pari < 0){
                    pari = 0;
                }
                dnitwo++;
                break;
                case "save":
                    pari += kolko;
                    dnitwo = 0;
                    break;
        }
        if (dnitwo >= 5){
            console.log(`You can't save the money.`);
            console.log(dni);
            break;
        }
        index++;
    }
    if (pari >= moneyNeeded) {
        console.log(`You saved the money for ${dni} days.`)
    }   
}