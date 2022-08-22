function movie(input) {
    
    let kvadMet = Number(input[0]);
    let grapePerm = Number(input[1]);   
    let grapeNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let allkgs = kvadMet * grapePerm;
    allkgs *= 0.40;
    let allLiters = allkgs / 2.5;
    let differ = Math.abs(grapeNeeded - allLiters);

    let resto = differ / workers;

    if (allLiters < grapeNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(differ)} liters wine needed.`);
    }
    else {
        console.log(`Good harvest this year! Total wine: ${allLiters} liters.`);
        console.log(`${Math.ceil(differ)} liters left -> ${Math.ceil(resto)} liters per person.`)
    }

    }