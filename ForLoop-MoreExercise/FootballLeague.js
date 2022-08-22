function bonus(input) {
    let index = 0;
    let full = Number(input[index++]);
    let fenove = Number(input[index++]);
    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;

    
    
    
    
      
    
    for (let i = 0; i < fenove  ; i++) {
        let sektor = input[index++];
        if (sektor == "A") {
            a += 1;
        }
        else if (sektor == "B") {
            b += 1;
        }
        else if (sektor == "V") {
            v += 1;
        }
        else if (sektor == "G") {
            g += 1;
        }
    }
    let alla = a / fenove * 100;
    let allb = b / fenove * 100;
    let allv = v / fenove * 100;
    let allg = g / fenove * 100;
    let omg = fenove / full * 100;
    console.log(`${alla.toFixed(2)}%`);
    console.log(`${allb.toFixed(2)}%`);
    console.log(`${allv.toFixed(2)}%`);
    console.log(`${allg.toFixed(2)}%`);
    console.log(`${omg.toFixed(2)}%`);
}