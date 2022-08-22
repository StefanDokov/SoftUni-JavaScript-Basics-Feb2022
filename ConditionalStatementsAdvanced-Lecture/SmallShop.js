function movie(input) {
    
    let product = input[0];
    let city = input[1];
    let kolko = Number(input[2]);

    if (city == "Sofia") {
        switch(product) {
            case "coffee": console.log(0.50 * kolko);break;
            case "water": console.log(0.80 * kolko);break;
            case "beer": console.log(1.20 * kolko);break;
            case "sweets": console.log(1.45 * kolko);break;
            case "peanuts": console.log(1.6 * kolko);break;
        }
    
    }
    else if (city == "Plovdiv") {
        switch(product) {
            case "coffee": console.log(0.40 * kolko);break;
            case "water": console.log(0.70 * kolko);break;
            case "beer": console.log(1.15 * kolko);break;
            case "sweets": console.log(1.30 * kolko);break;
            case "peanuts": console.log(1.5 * kolko);break;
    }
    
}
else if (city == "Varna") {
    switch(product) {
        case "coffee": console.log(0.45 * kolko);break;
        case "water": console.log(0.70 * kolko);break;
        case "beer": console.log(1.1 * kolko);break;
        case "sweets": console.log(1.35 * kolko);break;
        case "peanuts": console.log(1.55 * kolko);break;
}
}
}