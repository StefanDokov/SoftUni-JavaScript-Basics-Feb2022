function bonus(input) {
    let index = 0;
    let rows = Number(input[index++]);
    let top = 0;
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    
    
    
      
    
    for (let i = 0; i < rows  ; i++) {
        let results = Number(input[index++]);
        if (results >= 0 && results <= 9) {
            top += results * 20 / 100;
            one += 1;
        }
        else if (results >= 10 && results <= 19) {
            top += results * 30 / 100;
            two += 1;
        }
        else if (results >= 20 && results <= 29) {
            top += results * 40 / 100;
            three += 1;
        }
        else if (results >= 30 && results <= 39) {
            top += 50;
            four += 1;
        }
        else if (results >= 40 && results <= 50) {
            top += 100;
            five += 1;
        }
        else {
            top /= 2;
            six += 1;
        }
        
}
let onep = one / rows * 100;
let twop = two / rows * 100;
let threep = three / rows * 100;
let fourp = four / rows * 100;
let fivep = five / rows * 100;
let sixp = six / rows * 100;
console.log(top.toFixed(2));
console.log(`From 0 to 9: ${onep.toFixed(2)}%`);
console.log(`From 10 to 19: ${twop.toFixed(2)}%`);
console.log(`From 20 to 29: ${threep.toFixed(2)}%`);
console.log(`From 30 to 39: ${fourp.toFixed(2)}%`);
console.log(`From 40 to 50: ${fivep.toFixed(2)}%`);
console.log(`Invalid numbers: ${sixp.toFixed(2)}%`);
}