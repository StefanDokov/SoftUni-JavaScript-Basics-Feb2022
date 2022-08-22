function bonus(input) {
    let n = Number(input[0]);
    let cost = Number(input[1]);
    let toy = Number(input[2]);
    let sum = 0;
    let igrki = 0;
    let gg = 0;
    let go = 0;

    for(i = 1; i <= n; i++) {
        let bday = i;
        if (bday % 2 === 0) {
           sum += 1;
        }
        else {
            igrki += 1;
            
        }
    }
    for (b = sum; b > 0; b--) {
        go += b * 10;
        go -= 1

    }
    let wtf = igrki * toy;
    gg = go + wtf;
    let diff = Math.abs(cost - gg);
    if (gg >= cost) {
        console.log(`Yes! ${diff.toFixed(2)} `);
    }
    else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

        
        
    }