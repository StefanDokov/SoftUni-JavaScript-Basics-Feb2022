function price(input) {
    
    const costScum = Number(input[0]);
    const costCaca = Number(input[1]);
    const palKg = Number(input[2]);
    const safKg = Number(input[3]);
    const midKg = Number(input[4]);
    let midAll = midKg * 7.50;
    let safPrice = costCaca + (costCaca * 80 / 100);
    let palPrice = costScum + (costScum * 60 / 100);
    let palAll = palPrice * palKg;
    let safAll = safPrice * safKg;
    let sum = palAll + safAll + midAll;

    
    
    sum = sum.toFixed(2);
    

    



    
    
    console.log(sum);
    
}