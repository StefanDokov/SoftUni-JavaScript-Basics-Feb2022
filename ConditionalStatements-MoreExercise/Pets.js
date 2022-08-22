function movie(input) {
    
    let days = Number(input[0]);
    let foodKgs = Number(input[1]);   
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]);

    let dogHow = days * dogFood;
    let catHow = days * catFood;
    let turtleHow = days * (turtleFood * 1) / 1000;
    let allPets = dogHow + catHow + turtleHow;
    let howMu = Math.abs(foodKgs - allPets);


    if (foodKgs >= allPets) {
        console.log(`${Math.floor(howMu)} kilos of food left.`);
    }
    else  {
        console.log(`${Math.ceil(howMu)} more kilos of food are needed.`)
    }
}