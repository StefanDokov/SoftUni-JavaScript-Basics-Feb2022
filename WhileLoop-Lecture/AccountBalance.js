function bonus(input) {
    
    let index = 0
    let n = input[index++];
    let start = 0;
    
    
    
    
    while(n != "NoMoreMoney") {
        
       let sad = Number(n);
        if (sad < 0) {
            console.log(`Invalid operation!`)
            break;
        }
        start += sad;
        console.log(`Increase: ${sad.toFixed(2)}`);
        
        n = input[index++];
        
        
        
        
        
        
        
    }
    console.log(`Total: ${start.toFixed(2)}`);
        
    }