function bonus(input) {
    let ppl = Number(input[0]);
    let taxa = Number(input[1]);
    let shezlong = Number(input[2]);
    let chadur = Number(input[3]);
    
    
    let vhod = ppl * taxa;
    
    let chadpari = (Math.ceil(ppl / 2)) * chadur;
    
    let shezpari = (Math.ceil(ppl * 0.75)) * shezlong;
    
    let sum = vhod + chadpari + shezpari;
    console.log(`${sum.toFixed(2)} lv.`);
    
}    