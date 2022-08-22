function aqua(input) {
    
    const lenght = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentSand = Number(input[3]) / 100;
    let volume = lenght * width * height;
    let fullVol = volume * percentSand;
    let notFull = volume - fullVol;
    let liters = notFull / 1000;



    
    
    console.log(liters);
    
}