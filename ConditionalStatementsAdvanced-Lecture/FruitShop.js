function movie(input) {
    
    
    let fruit = input[0];
    let dayz = input[1];
    let numero = Number(input[2]);

if (dayz == "Monday" || dayz == "Tuesday" || dayz == "Wednesday" || dayz == "Thursday" || dayz == "Friday") {
    switch(fruit) {
        case "banana": console.log((2.5 * numero).toFixed(2));break;
        case "apple": console.log((1.2 * numero).toFixed(2));break;
        case "orange": console.log((0.85 * numero).toFixed(2));break;
        case "grapefruit": console.log((1.45 * numero).toFixed(2));break;
        case "kiwi": console.log((2.7 * numero).toFixed(2));break;
        case "pineapple": console.log((5.5 * numero).toFixed(2));break;
        case "grapes": console.log((3.85 * numero).toFixed(2));break;
        default: console.log("error");break;
}
}
else if (dayz == "Saturday" || dayz == "Sunday") {
    switch(fruit) {
        case "banana": console.log((2.7 * numero).toFixed(2));break;
        case "apple": console.log((1.25 * numero).toFixed(2));break;
        case "orange": console.log((0.9 * numero).toFixed(2));break;
        case "grapefruit": console.log((1.6 * numero).toFixed(2));break;
        case "kiwi": console.log((3 * numero).toFixed(2));break;
        case "pineapple": console.log((5.6 * numero).toFixed(2));break;
        case "grapes": console.log((4.2 * numero).toFixed(2));break;
        default: console.log("error");break;

}
}
else {
    console.log("error");

}
}