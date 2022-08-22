function bonus(input) {
    let ime = input[0];
    let dni = Number(input[1]);
    let bileti = Number(input[2]);
    let cena = Number(input[3]);
    let perc = Number(input[4]);
    
    
    
    
    let gg = dni * bileti * cena;
    let vs = gg - (gg * perc / 100);
    console.log(`The profit from the movie ${ime} is ${vs.toFixed(2)} lv.`);
    
    
    }