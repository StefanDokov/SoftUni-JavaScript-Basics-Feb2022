function bonus(input) {

    let index = 1;
    let butilki = Number(input[0]);
    
    let chinii = input[index];
    index++;
    let chin = 5;
    let tend = 15;
    
    let sum = 0;
    let vero = butilki * 750;
    let zarcount = 0;
    let chi = 0;
    let te = 0;
    
    
    while (chinii !== "End"){
        let zared = Number(chinii);
        zarcount += 1;
        
        if (zarcount % 3 == 0) {
            sum = tend * zared;
            vero -= sum;
            te += zared;
            
        }
        else {
        sum = chin * zared;
        vero -= sum;
        chi += zared;
        }
        if (vero < 0) {
            console.log(`Not enough detergent, ${Math.abs(vero)} ml. more necessary!`);
            break;
        }
        
        chinii = input[index];
        index++;
}
      if (chinii === "End") {
        if (vero < 0) {
            console.log(`Not enough detergent, ${Math.abs(vero)} ml. more necessary!`);
          
      }
        else {
        console.log(`Detergent was enough!`);
        console.log(`${chi} dishes and ${te} pots were washed.`);
        console.log(`Leftover detergent ${Math.abs(vero)} ml.`);

      }
    }
}