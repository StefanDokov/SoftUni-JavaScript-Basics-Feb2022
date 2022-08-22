function movie(input) {
    
    let serName = input[0];
    const serLenght = Number(input[1]);
    let resTime = Number(input[2]);
    
    let launchTime = Math.ceil(resTime * 1)/ 8;
    let otdihTime = Math.ceil(resTime * 1) / 4;

    let resil = Math.abs(resTime - launchTime - otdihTime);
    let omgTwo = Math.abs(resil - serLenght);

    if (resil >= serLenght) {
        console.log(`You have enough time to watch ${serName} and left with ${Math.ceil(omgTwo)} minutes free time.`)
    }
    else {
        console.log(`You don't have enough time to watch ${serName}, you need ${Math.ceil(omgTwo)} more minutes.`)
    }

    }