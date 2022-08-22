function movie(input) {
    
    let kms = Number(input[0]);
    let light = input[1];   
    let taxiStart = 0.7;
    let taxiDay = 0.79;
    let taxiNight = 0.9;
    let busKm = 0.09;
    let trainKm = 0.06;
    

    if (kms < 20) {
        if (light == "day") {
            let cena = (kms * taxiDay) + taxiStart;
            console.log(cena.toFixed(2));
        }
       else {
           let cena = (kms * taxiNight) + taxiStart;
           console.log(cena.toFixed(2));
       }
        
    }
    else if (kms >= 20 & kms < 100) {
        let cena = kms * busKm;
        console.log(cena.toFixed(2));
    }
else {
    let cena = kms * trainKm;
    console.log(cena.toFixed(2));
}
    }