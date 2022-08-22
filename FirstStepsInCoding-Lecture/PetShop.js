function cash(input) {
    
    const catF = 4;
    const dogF = 2.5;
    let dogPack = Number(input[0]);
    let catPack = Number (input[1]);
    let sumPack = (catF * catPack) + (dogF * dogPack)
    console.log(`${sumPack} lv.`);
}