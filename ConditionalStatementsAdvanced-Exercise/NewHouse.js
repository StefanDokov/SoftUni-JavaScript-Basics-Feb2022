function bonus(input) {
    
    let vid = input[0];
    let broj = Number(input[1]);
    let bujet = Number(input[2]);
    let pari = 0;
    
    
    
    

   

    switch(vid) {
        case "Roses": 
        
        if (broj > 80) {
            pari -= broj * 5 * 0.1;
        
        }
        
            pari += broj * 5;
         
        
        
        break;   
        case "Dahlias":
            
        if (broj > 90) {
            
            pari -= broj * 3.8 * 0.15;
        }
         
        
        pari += broj * 3.8;
        
        
        break;  
        case "Tulips":
            
            if (broj > 80) {
                
                pari -= broj * 2.8 * 0.15;
            }
            
              
              pari += broj * 2.8;
            
            
        break;  
        case "Narcissus":
                
                if (broj < 120) {
                    
                    pari += broj * 3 * 0.15;
                }
                   
                    
                    pari += broj * 3;
                
                
        break;
        case "Gladiolus":
                    
                    if (broj < 80) {
                        
                        pari += broj * 2.5 * 0.2;
                    }
                        
                        
                        pari += broj * 2.5;
                    
                    
        break; 
    }
    
    let diff = Math.abs(bujet - pari);
            if (bujet >= pari) {
                console.log(`Hey, you have a great garden with ${broj} ${vid} and ${diff.toFixed(2)} leva left.`)
            }
            else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }
}