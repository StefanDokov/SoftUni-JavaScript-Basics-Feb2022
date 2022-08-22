function bonus(input) {
    
    let pari = Number(input[0]);
    let godina = Number(input[1]);
    
    
      
    
    for (let i = 1800; i <= godina  ; i++) {
        let age = 18 + (i - 1800);
        

        if (i % 2 === 0) {
            pari -= 12000;
        }
        else {
            pari -= 12000 + (50 * age);

        }
        
      }
      let needpari = Math.abs(pari);
    if (pari < 0) {
        
        console.log(`He will need ${needpari.toFixed(2)} dollars to survive.`);
    }
    else {
        
        console.log(`Yes! He will live a carefree life and will have ${pari.toFixed(2)} dollars left.`);
    }


}