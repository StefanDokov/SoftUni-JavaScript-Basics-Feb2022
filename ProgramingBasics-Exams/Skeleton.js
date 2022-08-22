function bonus(input) {
    let minuti = Number(input[0]);
    let secundi = Number(input[1]);
    let dulgo = Number(input[2]);
    let secsto = Number(input[3]);
    
   let target = (minuti * 60) + secundi;
   let fast = (dulgo / 120) * 2.5;
   let skorost = ((dulgo / 100) * secsto) - fast;
   let diff = Math.abs(target - skorost);
   if (skorost <= target) {
     console.log(`Marin Bangiev won an Olympic quota!`);
     console.log(`His time is ${skorost.toFixed(3)}.`);
   }
   else {
     console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
   }
   
   
   }