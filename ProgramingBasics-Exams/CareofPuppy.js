function bonus(input) {
    let kgs = Number(input[0]);
    let allfood = kgs * 1000;
    index = 1;
   
    let fooday = input[index];
    index++;
    while (fooday !== "Adopted") {
        let grams = Number(fooday);
        allfood -= grams;
        fooday = input[index];
        index++;
    }
    if (fooday == "Adopted") {
        if (allfood >= 0) {
            console.log(`Food is enough! Leftovers: ${allfood} grams.`);
        }
        else {
            console.log(`Food is not enough. You need ${Math.abs(allfood)} grams more.`);
        }
    }
   
   }