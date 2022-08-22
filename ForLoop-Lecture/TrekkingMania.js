function bonus(input) {
    let index = 0;
    let groups = Number(input[index++]);
    
    
    let allPpl = 0;
    let musalaPer = 0;
    let monBlaPer = 0;
    let kalimPer = 0;
    let ktwoPer = 0; 
    let everPer = 0;
    

        
        for(let i = 1; i <= groups ; i++) {
            let best = Number(input[i]);
            if (best <= 5) {
                musalaPer += best;

            }
            else if (best >= 6 && best <= 12) {
                monBlaPer += best;
            }
            else if (best >= 13 && best <= 25) {
                kalimPer += best;
            }
            else if (best >= 26 && best <= 40) {
                ktwoPer += best;
            }
            else {
                everPer += best;
            }
            

            allPpl += best;
           }
           console.log(`${(musalaPer/allPpl * 100).toFixed(2)}%`);
           console.log(`${(monBlaPer/allPpl * 100).toFixed(2)}%`);
           console.log(`${(kalimPer/allPpl * 100).toFixed(2)}%`);
           console.log(`${(ktwoPer/allPpl * 100).toFixed(2)}%`);
           console.log(`${(everPer/allPpl * 100).toFixed(2)}%`);
        
        }