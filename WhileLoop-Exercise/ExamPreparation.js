function bonus(input) {

    let index = 0;
    let start = Number(input[index++]);
    let gg = input[index++];
    let prob = 0;
    let omg = 0;
    let sum = 0
    let gun = 0;
    dada = true;
    while(gg !== "Enough") {
         
        
            gun = gg
      
        prob += 1;
        let ocenka = Number(input[index++]);
        
        if (ocenka <= 4) {
          omg += 1;
        }
        if (omg == start) {
            console.log(`You need a break, ${start} poor grades.`);
            dada = false;
            break;

        }
        sum += ocenka;
        gg = input[index++];


    }
    let aver = sum / prob;
    if (dada) {
    console.log(`Average score: ${aver.toFixed(2)}`);
    console.log(`Number of problems: ${prob}`);
    console.log(`Last problem: ${gun}`);
    }

}