function bonus(input) {
    let range = Number(input[0]);
    let current = 1;
    let isbigger = false;
    let insideN = "";
  for (let n = 1; n <= range; n++) {
    for (let i = 1; i <= n; i++) {
      if (current > range) {
        isbigger = true;
        break;
      }
      
     
      current = "$";
      insideN += current + " ";
      current++;
      
      
    }
    console.log(insideN);
    insideN ="";
    if (isbigger) {
      break;
    }
    
     
  }
  
  }  