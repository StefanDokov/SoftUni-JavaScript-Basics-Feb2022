function speed(input) {
    
    const velocity = input[0];
    
    
    if (velocity <= 10) {
    console.log("slow");
}
else if (velocity > 10 & velocity <= 50) {
    console.log("average");
}
else if (velocity > 50 & velocity <= 150) {
    console.log("fast");

}
else if (velocity > 150 & velocity <= 1000) {
    console.log("ultra fast");

}
else if (velocity > 1000) {
    console.log("extremely fast");

}
}