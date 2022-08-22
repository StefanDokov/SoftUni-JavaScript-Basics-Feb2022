function bonus(input) {
    
    let xone = Number(input[0]);
    let yone = Number(input[1]);
    let xtwo = Number(input[2]);
    let ytwo = Number(input[3]);
    let xino = Number(input[4]);
    let yino = Number(input[5]);

    

    if ((xino == xone || xino == xtwo) && yino > yone && yino <= ytwo) {
        console.log(`Border`);
    }
    else if ((yino == yone || yino == ytwo) && xino > xone && xino <= xtwo) {
        console.log(`Border`);
    }
    else {
        console.log(`Inside / Outside`);
    }




}