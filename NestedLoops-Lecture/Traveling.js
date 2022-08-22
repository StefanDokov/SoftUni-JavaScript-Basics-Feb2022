function bonus(input) {
    let index = 0;
    let dest = input[index];
    index++;
    let bujet = Number(input[index]);
    index++;
    let sum = 0;
    let diff = 0;
while (dest !== "End") {
    let pari = Number(input[index]);
    index++
    sum += pari;
    if (sum >= bujet) {
         console.log(`Going to ${dest}!`);
         sum = 0;
         dest = input[index];
         index++;
         
         bujet = Number(input[index]);
         index++;
    }
    
}

} 