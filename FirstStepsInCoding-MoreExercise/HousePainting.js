function paint(input) {
    
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);
    const windowVal = 1.5 * 1.5;
    const doorVal = 1.2 * 2;
    let sidesVal = x * y;
    let frontVal = x * x;
    let frontSuper = frontVal - doorVal;
    let sideSuper = sidesVal - windowVal;
    let frontRoof = (x * h) / 2;
    let greenPaint = frontSuper + (2 * sideSuper) + frontVal;
    let redPaint = (2 * frontRoof) + (2 * sidesVal);
    let greenLiters = greenPaint / 3.4;
    let redLiters = redPaint / 4.3;

    
    
    greenLiters = greenLiters.toFixed(2);
    redLiters = redLiters.toFixed(2);
    

    console.log(greenLiters);
    console.log(redLiters);
    
}