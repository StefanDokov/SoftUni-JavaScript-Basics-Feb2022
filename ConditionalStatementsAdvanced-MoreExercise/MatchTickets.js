function bonus(input) {
    
    let budget = Number(input[0]);
    let category = input[1];
    let ppl = Number(input[2]);
    let vip = 499.99;
    let normal = 249.99;
    let yes = 0;

    if (ppl > 0 && ppl <= 4) {
        budget *= 0.25;
    }
    else if (ppl >= 5 && ppl <=9) {
        budget *= 0.4;
    }
    else if (ppl >= 10 && ppl <= 24) {
        budget *= 0.5;
    }
    else if (ppl >= 25 && ppl <= 49) {
        budget *= 0.6;
    }
    else {
        budget *= 0.75;
    }

    switch(category) {
        case "VIP":
            yes = ppl * vip;
            break;
        case "Normal":
            yes = ppl * normal;
            break;
            
    }
    let diff = Math.abs(budget - yes);
    if (budget >= yes) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}