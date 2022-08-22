function movie(input) {
    
    let budget = Number(input[0]);
    const videoCards = Number(input[1]);
    let procesors = Number(input[2]);
    let rampam = Number(input[3]);
    const vidCost = 250;
    let procCost = (vidCost * videoCards) * 35 / 100;
    let ranCost = (vidCost * videoCards) * 10 /100;

    let everything = videoCards * vidCost + procesors * procCost + rampam * ranCost;

   
    if (videoCards > procesors) {
        everything *= 0.85;
    }
     let money = Math.abs(budget - everything);
     if (budget >= everything) {
         console.log(`You have ${money.toFixed(2)} leva left!`)
     }
     else {
         console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`)
     }
    
    }