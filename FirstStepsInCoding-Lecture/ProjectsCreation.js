function hours(input) {
    
    let firstName = input[0];
    const perHour = 3;
    let numPjct = Number(input[1]);
    let hoursTaken = numPjct * perHour;
    console.log(`The architect ${firstName} will need ${hoursTaken} hours to complete ${numPjct} project/s.`);
}