function bonus(input) {
    
    let index = 0
    let n = input[index++];
    let start = Number(input[0]);

    
    
    
    
    while(n !== "Stop") {
        
       let sad = Number(n);
        if (sad > start) {
            start = sad;
            
        }
        
        
        n = input[index++];
        
        
        
        
        
        
        
        
    }
    console.log(start);
        
    }