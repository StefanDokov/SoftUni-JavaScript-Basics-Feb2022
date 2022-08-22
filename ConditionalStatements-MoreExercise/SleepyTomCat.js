function movie(input) {
    
    let restDays = Number(input[0]);
    let tomNorm = 30000;    
    let workDays = 365 - restDays;

    let timePlay = (restDays * 127) + (workDays * 63);
    let tomPlay = Math.abs(tomNorm - timePlay);
    let tomHours = tomPlay / 60;
    let tomMinu = tomPlay % 60;
    let tomHou = Math.trunc(tomHours);
    

    

    if (timePlay >= tomNorm) {
        console.log(`Tom will run away`)
        console.log(` ${tomHou} hours and ${tomMinu} minutes more for play`)
    }
    else {
        console.log(`Tom sleeps well`)
        console.log(`${tomHou} hours and ${tomMinu} minutes less for play`)
    }


    }