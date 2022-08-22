function circle(input) {
    
    const r = Number(input[0]);
    let sideCircle = Math.PI * r * r;
    let periCircle = 2 * Math.PI * r;

    

    
    
    sideCircle = sideCircle.toFixed(2);
    periCircle = periCircle.toFixed(2);
    

    console.log(sideCircle);
    console.log(periCircle);
    
    
}