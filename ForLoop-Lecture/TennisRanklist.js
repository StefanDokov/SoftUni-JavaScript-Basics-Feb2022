function bonus(input) {
    let index = 0;
    let turniri = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let pobedi = 0;
    let bonus = 0;
    

    for (let i = 0; i < turniri; i ++) {
        let etap = input[index++];
        switch(etap) {
            case "W":
                pobedi += 1;
                bonus += 2000;
                break;
            case "F":
                bonus += 1200;
                break;
            case "SF":
                bonus += 720;
        }
        
    }
    let aver = bonus / turniri;
    let winRate = pobedi / turniri * 100;

    console.log(`Final points: ${startPoints + bonus}`);
    console.log(`Average points: ${Math.trunc(aver)}`);
    console.log(`${winRate.toFixed(2)}%`);
    
    
   
        
    }