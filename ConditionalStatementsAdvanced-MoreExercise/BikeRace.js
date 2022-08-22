function bonus(input) {
    
    let numbBikers = Number(input[0]);
    let oldBikers = Number(input[1]);
    let vidtrace = input[2];
    let taksaJun = 0;
    let taksaOld = 0;
    let full = 0;
    
    switch(vidtrace) {
        case "trail":
            taksaJun = 5.5 * numbBikers;
            taksaOld = 7 * oldBikers;
            full = taksaJun + taksaOld;
            break;
        case "cross-country":
            taksaJun = 8 * numbBikers;
            taksaOld = 9.5 * oldBikers;
            full = taksaJun + taksaOld;
            if (numbBikers + oldBikers >= 50){
                full *= 0.75
        }
            break;
        case "downhill":
            taksaJun = 12.25 * numbBikers;
            taksaOld = 13.75 * oldBikers;
            full = taksaJun + taksaOld;
            break;
        case "road":
            taksaJun = 20 * numbBikers;
            taksaOld = 21.5 * oldBikers;
            full = taksaJun + taksaOld;
            break;
    }
    
    full *= 0.95;
    console.log(full.toFixed(2));


    
}