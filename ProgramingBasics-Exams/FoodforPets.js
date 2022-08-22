function bonus(input) {
    let days = Number(input[0]);
    let allfood = Number(input[1]);
    let index = 2;
    let counter = 1;
    let dogall = 0;
    let catall = 0;
    let cookies = 0;
    let sumo = 0;
    
   
    while (counter <= days) {
        
        
        let dogeat = Number(input[index]);
        index++;
        let cateat = Number(input[index]);
        index++;
        let all = dogeat + cateat;
        
        if (counter % 3 == 0) {
        cookies += all * 10 / 100;
    }
       
        dogall += dogeat;
        catall += cateat;
        
        counter++;
        
    }
     
   
   sumo = (dogall + catall);
   let perall = ((sumo / allfood) * 100).toFixed(2);
   let perdog = ((dogall / sumo) * 100).toFixed(2);
   let percat = ((catall / sumo) * 100).toFixed(2);
   
   
   console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
   console.log(`${perall}% of the food has been eaten.`);
   console.log(`${perdog}% eaten from the dog.`);
   console.log(`${percat}% eaten from the cat.`);
   
   }