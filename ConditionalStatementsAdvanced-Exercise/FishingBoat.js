function bonus(input) {
    
    let bujet = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let springp = 3000;
    let sumfal = 4200;
    let wintp = 2600;
    let omg = 0;
    

    switch(season) {
        case "Spring":
            omg = springp;
            break;
            case "Winter":
                omg = wintp;
                break;
                case "Autumn": 
                case "Summer":

                    omg = sumfal;
                    break;
    }
    if (fishers <= 6) {
        omg -= omg * 0.1;
    }
    else if (fishers >= 7 && fishers <= 11)
        omg -= omg * 0.15;
        else {
            omg -= omg * 0.25;
        }
    
        if (fishers % 2 == 0 && season != "Autumn") {
        omg -= omg * 0.05;
     }

    let diff = Math.abs(bujet - omg);

    if (bujet >= omg) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}