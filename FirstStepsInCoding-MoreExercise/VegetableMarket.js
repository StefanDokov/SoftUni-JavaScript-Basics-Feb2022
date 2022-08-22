function aqua(input) {
    
    const priceVegs = Number(input[0]);
    const priceFrut = Number(input[1]);
    const vegsKgs = Number(input[2]);
    const frutKgs = Number(input[3]);
    const eur = 1.94;
    let allVegs = priceVegs * vegsKgs;
    let allFruts = priceFrut * frutKgs;
    let sumVegs = allVegs / eur;
    let sumFruts = allFruts / eur;
    let sumSupreme = sumVegs + sumFruts;
    
    
    sumSupreme = sumSupreme.toFixed(2);



    
    
    console.log(sumSupreme);
    
}