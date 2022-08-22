function bonus(input) {
    let range = Number(input[0]);
    let current = 1;
    
    let insideN = "";
  for (let n = 0; n < range; n++) {
    for (let i = 0; i < range; i++) {
      
      let sum = n * i;
  
      sum = "*";
      insideN += sum + " ";
      
      
      
    }
    console.log(insideN);
    insideN ="";
    
     
  }
  
  }  