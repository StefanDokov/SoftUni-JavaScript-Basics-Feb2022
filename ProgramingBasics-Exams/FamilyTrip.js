function bonus(input) {
    let bujet = Number(input[0]);
    let nights = Number(input[1]);
    let cenanight = Number(input[2]);
    let percent = Number(input[3]);
    
    if (nights > 7) {
        cenanight *= 0.95;
    }
    let vspari = bujet - (bujet * percent / 100);
    
    let vsnoshti = nights * cenanight;
    
    let ostatyk = Math.abs(vspari - vsnoshti);
    
    if (vspari >= vsnoshti) {
        console.log(`Ivanovi will be left with ${ostatyk.toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${ostatyk.toFixed(2)} leva needed.`);
    }
    
    }