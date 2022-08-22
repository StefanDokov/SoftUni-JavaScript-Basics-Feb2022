function bonus(input) {
    let index = 0;
    let n = Number(input[index++]);
    
    let lastPair = 0;
    let maxDiff = 0;
    let points = 0;


    
    
    
    
      
    
    for (let i = 0; i < n  ; i++) {
        let numbOne = Number(input[index++]);
        let numbTwo = Number(input[index++]);
       
       let currentPair = numbOne + numbTwo;
        
       if (i > 0) {
            let diff = Math.abs(currentPair - lastPair);
            if (diff > maxDiff) {
                maxDiff = diff
            }
            
        }
    
    lastPair = currentPair;
    }
if (maxDiff === 0) {
    console.log(`Yes, value=${lastPair}`);
}
else {
    console.log(`No, maxdiff=${maxDiff}`);
}
    }