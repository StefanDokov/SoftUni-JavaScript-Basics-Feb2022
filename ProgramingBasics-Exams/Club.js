function bonus(input) {
    let pechalba = Number(input[0]);
    let index = 1;
    let ime = input[index];
    index++;
    let all = 0;
    let sum = 0;
    while (ime !== "Party!"){
        if (ime == undefined){
            break;
        }
        let vid = Number(ime.length);
    
        
        
        let broj = Number(input[index]);
        index++;
        
        
        sum = vid * broj;
        
        if (sum % 2 !== 0) {
            sum *= 0.75;
        }
    all += sum;
        ime = input[index];
        index++;
    }
    let diff = Math.abs(pechalba - all);
    if (all < pechalba) {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    else {
        console.log(`Target acquired.`);
    }
    console.log(`Club income - ${all.toFixed(2)} leva.`);
    
    }