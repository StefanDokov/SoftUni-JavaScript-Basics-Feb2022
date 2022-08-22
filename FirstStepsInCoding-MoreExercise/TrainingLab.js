function aqua(input) {
    
    const w = Number(input[0]) * 100;
    const h = (Number(input[1]) * 100) - 100;
    let desks = h / 70;
    let sits = w / 120;

    
    
    desks = Math.floor(desks);
    sits = Math.floor(sits);

    let sumAll = desks * sits - 3;  



    
    
    console.log(sumAll);
    
}