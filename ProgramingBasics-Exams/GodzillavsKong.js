function bonus(input) {
    let bujet = Number(input[0]);
    let statisti = Number(input[1]);
    let cenastat = Number(input[2]);
    let decor = bujet * 0.1;
    let drehi = statisti * cenastat;
    if (statisti > 150) {
    drehi *= 0.9;
    }
    let all = decor + drehi;
    let diff = Math.abs(bujet - all);
    if (bujet < all) {
     console.log(`Not enough money!`);
     console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
    else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
    }