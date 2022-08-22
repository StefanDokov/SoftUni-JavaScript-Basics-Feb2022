function bonus(input) {
    
    let kakwa = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);

    let sits = rows * colums;

    switch(kakwa) {
        case "Premiere": console.log(`${(12 * sits).toFixed(2)} leva`);break;
        case "Normal": console.log(`${(7.5 * sits).toFixed(2)} leva`);break;
        case "Discount": console.log(`${(5 * sits).toFixed(2)} leva`);break;
    }
    
    
    
    
}