function bonus(input) {
    
    let daysZ = Number(input[0]);
    let roomSize = input[1];
    let points = input[2];
    let rfop = 18;
    let apart = 25;
    let presap = 35;
    let finish = 0;
    let nightz = daysZ - 1;
    
    switch(roomSize) {
        case "room for one person":
            finish = nightz * rfop;
            break;
        case "apartment":
            finish = apart * nightz;
            if (daysZ < 10) {
                finish *= 0.7;
            }
            else if (daysZ >=10 && daysZ <= 15){
                finish *= 0.65;
            }
            else {
                finish *= 0.5;
            }
            break;
        case "president apartment":
            finish = presap * nightz;
            if (daysZ < 10) {
                finish *= 0.9;
            }
            else if (daysZ >=10 && daysZ <= 15){
                finish *= 0.85;
            }
            else {
                finish *= 0.8;
            }
            break;

    }
    switch(points){
        case "positive":
            finish += finish * 0.25;
            break;
            case "negative":
                finish -= finish * 0.1;
    }
    console.log(finish.toFixed(2));
}