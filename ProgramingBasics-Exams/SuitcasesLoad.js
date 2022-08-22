function bonus(input) {
    let trunk = Number(input[0]);
    let index = 1;
    let counter = 0;
    let onit = 0;
   
    let kufar = input[index];
    index++;
    let nomoe = true;
    
    while (kufar !== "End") {
       counter++;
        let mqsto = Number(kufar);
        if (counter % 3 == 0) {
            mqsto *= 1.1;
        }
        trunk -= mqsto;
        if (trunk < 0) {
           console.log(`No more space!`);
           nomoe = false;
           break;
       }
       
           
       
        else {
        kufar = input[index];
        index++;
        onit++;
        }
    
   
    }
    if (nomoe) {
   console.log(`Congratulations! All suitcases are loaded!`);
    }
    console.log(`Statistic: ${onit} suitcases loaded.`);
   }