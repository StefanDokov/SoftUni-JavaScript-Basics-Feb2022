function bonus(input) {
    let index = 0;
    let monts = Number(input[index++]);
    let voda = 0;
    let inet = 0;
    let other = 0;
    let all = 0;
    let toka = 0;

    
    
    
    
      
    
    for (let i = 0; i < monts  ; i++) {
        let tok = Number(input[index++]);
        toka += tok;
        voda += 20;
        inet += 15;
        
        
}
let oder = voda + inet + toka;
        other = oder + (oder * 20 / 100);
        all = oder + other;
let aver = all / monts;
console.log(`Electricity: ${toka.toFixed(2)} lv`);
console.log(`Water: ${voda.toFixed(2)} lv`);
console.log(`Internet: ${inet.toFixed(2)} lv`);
console.log(`Other: ${other.toFixed(2)} lv`);
console.log(`Average: ${aver.toFixed(2)} lv`);
}