function bonus(input) {
    let broj = Number(input[0]);
   let index = 1;
   let suga = 0;
   let flou = 0;
   let mostza = 0;
   let mostbrash = 0;
  
    for (let i = 0;i < broj;i++){
       let zah = Number(input[index]);
       index++;
       let brash = Number(input[index]);
       index++;
       suga += zah;
       flou += brash;
       if (zah > mostza) {
         mostza = zah;
       }
       if (brash > mostbrash){
         mostbrash = brash;
       }
  
    }
    let vszah = Math.ceil(suga / 950);
    let vsbrash = Math.ceil(flou / 750);
    console.log(`Sugar: ${vszah}`);
    console.log(`Flour: ${vsbrash}`);
    console.log(`Max used flour is ${mostbrash} grams, max used sugar is ${mostza} grams.`);
  
    
  }