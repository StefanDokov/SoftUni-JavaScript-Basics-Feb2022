function bonus(input) {
    
    let index = 1;
    let name = input[0];
    let numero = input[index++];
    
    let sum = 0;
    let aver = 0;
    let start = 0;
    

    
    
    
    isGrad = true;
    while(index <= 13) {
        let gg = Number(numero);
        
        if (gg < 4) {
            start +=1;
            if (start = 2) {
            isGrad = false;
            let sus = index - 1;
            console.log(`${name} has been excluded at ${sus} grade`);
            break;
            }
        }
        else {
        sum += gg;
        }
        
        numero = input[index++];
        
        
        }
        let sas = index - 2;
    aver = Math.abs(sum / sas);
    if (isGrad){
    console.log(`${name} graduated. Average grade: ${(aver).toFixed(2)}`);
    }
}