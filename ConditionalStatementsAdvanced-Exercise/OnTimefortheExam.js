function bonus(input) {
    
    let examHr = Number(input[0]);
    let examMin = Number(input[1]);
    let hourArive = Number(input[2]);
    let minArive = Number(input[3]);
    
    let totalexam = examHr * 60 + examMin;
    let totalArive = hourArive * 60 + minArive;
    let diffTime = Math.abs(totalexam - totalArive);
    let hourdiff = Math.floor(diffTime / 60);
    let minDiff = diffTime % 60;
    if (minDiff === 0 || (minDiff < 10) && hourdiff > 0) {
        minDiff = `0${minDiff}`;
    }
   if (totalArive === totalexam) {
       console.log(`On time`);

   }
   else if (totalArive > totalexam && diffTime < 60) {
       console.log(`Late`);
       console.log(`${minDiff} minutes after the start`);
   }
   else if (totalArive > totalexam && diffTime >= 60) {
       console.log(`Late`);
       console.log(`${hourdiff}:${minDiff} hours after the start`)
   }
   else if (diffTime <= 30) {
       console.log(`On time`);
       console.log(`${minDiff} minutes before the start`);
   }
   else if (diffTime > 30 && diffTime < 60) {
       console.log(`Early`);
       console.log(`${minDiff} minutes before the start`)
   }
   else {
       console.log(`Early`);
       console.log(`${hourdiff}:${minDiff} hours before the start`)
   }
   }