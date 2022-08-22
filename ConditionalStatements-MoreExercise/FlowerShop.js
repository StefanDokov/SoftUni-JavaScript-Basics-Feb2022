function movie(input) {
    
    let magnos = Number(input[0]);
    let zumbil = Number(input[1]);   
    let roses = Number(input[2]);
    let cactuses = Number(input[3]);
    let pricePres = Number(input[4]);
    let magPr = 3.25;
    let zumPr = 4;
    let rosPr = 3.5;
    let cacPr = 8;
    let allYes = (magPr * magnos) + (zumPr * zumbil) + (rosPr * roses) + (cacPr * cactuses);

    allYes *= 0.95;

    let resto = Math.abs(allYes - pricePres);


    if (allYes >= pricePres) {

        console.log(`She is left with ${Math.floor(resto)} leva.`);
    }
    else  {
        console.log(`She will have to borrow ${Math.ceil(resto)} leva.`)
    }
}