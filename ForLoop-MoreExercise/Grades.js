function bonus(input) {
    let index = 0;
    let studenti = Number(input[index++]);
    let top = 0;
    let fofive = 0;
    let thrfo = 0;
    let fail = 0;
    
    let all = 0;
    
    
    
      
    
    for (let i = 0; i < studenti  ; i++) {
        let vsichkoocenki = Number(input[index++]);
        all += vsichkoocenki;
        
        if (vsichkoocenki >= 5) {
            top += 1;
        }
        else if (vsichkoocenki >= 4 && vsichkoocenki < 5) {
            fofive += 1;
        }
        else if (vsichkoocenki >= 3 && vsichkoocenki < 4) {
            thrfo += 1
        }
        else {
            fail += 1;
        }
}
let topi = top / studenti * 100;
let fori = fofive / studenti * 100;
let thri = thrfo / studenti * 100;
let faili = fail / studenti * 100;
let average = all / studenti;
console.log(`Top students: ${topi.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${fori.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${thri.toFixed(2)}%`);
console.log(`Fail: ${faili.toFixed(2)}%`);
console.log(`Average: ${average.toFixed(2)}`);
}