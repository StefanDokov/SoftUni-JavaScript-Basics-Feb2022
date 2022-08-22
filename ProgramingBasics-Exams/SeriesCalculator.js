function bonus(input) {
    let ime = input[0];
    let sezoni = Number(input[1]);
    let epizodi = Number(input[2]);
    let time = Number(input[3]);
    
    let special = sezoni * 10;
    let ful = time * 1.2;
    let gg = sezoni * epizodi * ful + special;
    console.log(`Total time needed to watch the ${ime} series is ${gg} minutes.`);
    
    
    }