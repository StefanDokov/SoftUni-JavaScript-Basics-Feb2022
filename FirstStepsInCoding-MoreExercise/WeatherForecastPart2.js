function open(input) {
    
    const grad = input[0];
    
    
    if (grad >= 26.00 & grad <= 35.00) {
    console.log("Hot");
}
else if (grad >= 20.1 & grad <= 25.9) {
    console.log("Warm");
}
else if (grad >= 15.00 & grad <= 20.00) {
    console.log("Mild");

}
else if (grad >= 12.00 & grad <= 14.9) {
    console.log("Cool");
}
else if (grad >= 5.00 & grad <= 11.9) {
    console.log("Cold");
}
else {
    console.log("unknown");
}
}