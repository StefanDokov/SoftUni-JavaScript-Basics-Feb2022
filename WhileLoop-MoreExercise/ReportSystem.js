function bonus(input) {

    let index = 1;
    let suma = Number(input[0]);
    
    let cena = input[index];
    index++;
    
    let all = 0;
    let sumCash = 0;
    let sumCard = 0;
    let counti = 0;
    let srcash = 0;
    let srcard = 0;
    let oni = 0;
    let twoni = 0;
    
    while (cena !== "End"){
        let item = Number(cena);
        counti += 1;
        
        
        if (counti % 2 !== 0) {
            
            if (item <= 100) {
              console.log(`Product sold!`);
              sumCash += item;
              oni += 1;
              
            }
            else {
              console.log(`Error in transaction!`);
            }
            
        }
        else if (counti % 2 == 0) {
            if (item >= 10) {
              twoni += 1;
              console.log(`Product sold!`);
              sumCard += item;
              
            }
            else {
              console.log(`Error in transaction!`);
            }
        }
        all = sumCard + sumCash;
        srcard = sumCard / twoni;
        srcash = sumCash / oni;
        if (all >= suma) {
            console.log(`Average CS: ${srcash.toFixed(2)}`);
            console.log(`Average CC: ${srcard.toFixed(2)}`);
            break;
        }
        
        cena = input[index];
        index++;
        
}
      if (cena == "End") {
        if (all >= suma) {
          console.log(`Average CS: ${srcash.toFixed(2)}`);
          console.log(`Average CC: ${srcard.toFixed(2)}`);
          
      }
        else {
        console.log(`Failed to collect required money for charity.`);
        

      }
    }
}