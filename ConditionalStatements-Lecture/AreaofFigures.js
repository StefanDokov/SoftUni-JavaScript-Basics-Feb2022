function lice(input) {
    
    let figure = input[0];
    let sideOne = input[1];
    let sideTwo = input[2];

    
    
    if (figure == "square") {
        let result = sideOne * sideOne;
    console.log(result.toFixed(3));
}
else if (figure == "rectangle") {
    let result = sideOne * sideTwo;
    console.log(result.toFixed(3));
}
else if (figure == "circle") {
    let result = Math.PI * sideOne * sideOne;
    console.log(result.toFixed(3));

}
else if (figure == "triangle") {
    let result = sideOne * sideTwo / 2;
    console.log(result.toFixed(3));

}

}