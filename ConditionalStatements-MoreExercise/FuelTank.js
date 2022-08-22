function movie(input) {
    
    let fuelVid = input[0];
    let liters = Number(input[1]);  
  if (fuelVid !== "Diesel" && fuelVid !== "Gasoline" && fuelVid !== "Gas") {
    console.log(`Invalid fuel!`);
} else if (liters >= 25) {
    console.log(`You have enough ${(fuelVid).toLowerCase()}.`);
} else {
    console.log(`Fill your tank with ${(fuelVid).toLowerCase()}!`);
}
}