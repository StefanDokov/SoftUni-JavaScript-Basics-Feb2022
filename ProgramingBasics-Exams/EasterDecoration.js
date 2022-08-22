function bonus(input) {
    let broj = Number(input[0]);
   let index = 1;
   let sum = 0;
   let itemi = 0;
   let supreme = 0;
   for (let i = 0; i < broj;i++){
      let vid = input[index];
      index++;
  
      while(vid !== "Finish"){
        switch(vid){
          case "basket":
                   sum += 1.5;
                   itemi++;
                   break;
                   case "wreath":
                     sum += 3.8;
                     itemi++;
                     break;
                     case "chocolate bunny":
                       sum += 7;
                       itemi++;
                       break;
  
        }
        vid = input[index];
        index++;
      }
      if (vid == "Finish"){
        if (itemi % 2 == 0){
         sum *= 0.8;
  
        }
         console.log(`You purchased ${itemi} items for ${sum.toFixed(2)} leva.`);
         supreme += sum;
         itemi = 0;
         sum = 0;
  
  
      }
  
  }
   let aver = supreme / broj;
   console.log(`Average bill per client is: ${aver.toFixed(2)} leva.`);
    
  }