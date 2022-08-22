function bonus(input) {
    let range = Number(input[0]);
    
    
    let insideN = "";
  for (let n = 0; n < range; n++) {
    for (let i = 0; i < range; i++) {
      if (n * i <= range) {
        
      }
      let sum = n * i;
      sum = "*";
      insideN += sum;
      
      
    }
    
     insideN += "\n";
  }
  console.log(insideN);
  } 