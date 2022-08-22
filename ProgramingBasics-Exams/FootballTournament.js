function bonus(input) {
    let namo = input[0];
    let sreshti = Number(input[1]);
    let machove = sreshti + 2;
    let wi = 0;
    let dra = 0;
    let lo = 0;
    let points = 0
    let igra = true;
    if (sreshti < 1) {
        console.log(`${namo} hasn't played any games during this season.`);
        igra = false;
    }
    for (let i = 2; i < machove;i++){
        let result = input[i];
        if (result == "W"){
            wi++;
            points += 3;
        }
        else if (result == "D") {
            dra++;
            points += 1;
        }
        else if (result == "L"){
            lo++;
        }
    }
    let winper = wi / sreshti * 100;
    if (igra) {
    
    console.log(`${namo} has won ${points} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${wi}`);
    console.log(`## D: ${dra}`);
    console.log(`## L: ${lo}`);
    console.log(`Win rate: ${winper.toFixed(2)}%`);
    }
    
    }