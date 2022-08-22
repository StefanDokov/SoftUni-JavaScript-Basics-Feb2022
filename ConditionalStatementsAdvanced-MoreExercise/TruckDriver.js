function bonus(input) {
    
    let season = input[0];
    let kmsmonth = Number(input[1]);
    let pay = 0;
    let place = 0;


    switch(season) {
        case "Spring":
        case "Autumn":
            if (kmsmonth <= 5000) {
                pay = 0.75 * kmsmonth;
            }
            else if (kmsmonth > 5000 && kmsmonth <= 10000) {
                pay = 0.95 * kmsmonth;
            }
            else {
                pay = 1.45 * kmsmonth;
            }

break;
        case "Summer":
            if (kmsmonth <= 5000) {
                pay = 0.9 * kmsmonth;
            }
            else if (kmsmonth > 5000 && kmsmonth <= 10000) {
                pay = 1.1 * kmsmonth;
            }
            else {
                pay = 1.45 * kmsmonth;
            }
            break;
            case "Winter":
                if (kmsmonth <= 5000) {
                    pay = 1.05 * kmsmonth;
                }
                else if (kmsmonth > 5000 && kmsmonth <= 10000) {
                    pay = 1.25 * kmsmonth;
                }
                else {
                    pay = 1.45 * kmsmonth;
                }
                break;
            }
            pay *= 4;
            pay = pay - (pay * 10 / 100);
    
    
    
    


console.log(pay.toFixed(2));
}