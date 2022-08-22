function movie(input) {
    
    let recSec = Number(input[0]);
    const recDistance = Number(input[1]);
    let timePerm = Number(input[2]);
    let time = recDistance * timePerm;
    let slower = Math.floor(recDistance / 15) * 12.5;

    let allTime = time + slower;
    let notEnough = Math.abs(allTime - recSec);
    
   
    if (allTime >= recSec) {
        console.log(`No, he failed! He was ${notEnough.toFixed(2)} seconds slower.`)
    }
      
      else {
          console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`);
         
      }
    }