function basket(input) {
    
    const yearCost = Number(input[0]);
    let snikers = yearCost * 60 / 100;
    let suit = snikers * 80 / 100;
    let ball = suit * 25 /100;
    let jewels = ball * 20 /100;
    let sumSupreme = yearCost + snikers + suit + ball + jewels;

    
    
    console.log(sumSupreme);
    
}