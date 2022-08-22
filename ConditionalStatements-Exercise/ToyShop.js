function toyStore(input) {
    
    let vacation = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkDolls = Number(input[2]);
    let toyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    const puzP = 2.60;
    const talkP = 3;
    const toybP = 4.10;
    const minP = 8.20;
    const truckP = 2;

    let sumToys = puzzles + talkDolls + toyBears + minions + trucks;
    let money = (puzzles * puzP) + (talkDolls * talkP) + (toyBears * toybP) + (minions * minP) + (trucks * truckP);
    
    
    if (sumToys >= 50) {
        money *= 0.75;
    }
       money *= 0.9;

        let final = Math.abs(money - vacation);
        
        if (money >= vacation){
        console.log(`Yes! ${final.toFixed(2)} lv left.`);
        }
        else {
            console.log(`Not enough money! ${final.toFixed(2)} lv needed.`);
        }
        
    }