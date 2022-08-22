function bonus(input) {
    
    let season = input[0];
    let tip = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);
    let noshtyvki = 0;
    let sport = 0;

    switch(season) {
        case "Winter":
            if (tip == "girls") {
                noshtyvki = 9.6 * nights;
                sport = "Gymnastics";
            }
            else if (tip == "boys"){
                noshtyvki = 9.6 * nights;
                sport = "Judo";

            }
            else {
                noshtyvki = 10 * nights;
                sport = "Ski";
            }
            break;
            case "Spring": 
            if (tip == "girls") {
                noshtyvki = 7.2 * nights;
                sport = "Athletics";
            }
            else if (tip == "boys"){
                noshtyvki = 7.2 * nights;
                sport = "Tennis";

            }
            else {
                noshtyvki = 9.5 * nights;
                sport = "Cycling";
            }
            break;
            case "Summer":
                if (tip == "girls") {
                    noshtyvki = 15 * nights;
                    sport = "Volleyball"
                }
                else if (tip == "boys") {
                    noshtyvki = 15 * nights;
                    sport = "Football";

                }
                else {
                    noshtyvki = 20 * nights;
                    sport = "Swimming";
                }
                break;
}
noshtyvki *= students;
if (students >= 50) {
    noshtyvki *= 0.5;
}
else if (students >= 20 && students < 50) {
    noshtyvki *= 0.85;
}
else if (students >= 10 && students < 20) {
    noshtyvki *= 0.95;
}



console.log(`${sport} ${noshtyvki.toFixed(2)} lv.`);
}