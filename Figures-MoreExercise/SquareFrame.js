function bonus(input) {
    let range = Number(input[0]);
    
    let insideN = "";
    
  for (let n = 0; n < range; n++) {
    
      for (let i = 0; i < range; i++) {
      if (i == 0) {
        
        if (n > i && n <= range - 2) {
          let sum = "|";
          insideN +=sum;
          
        } 
          
       
       else { 
      let sum = "+";
      insideN += sum;
       }
      
    }
    else if (i > 0 && i <= range - 2) {
      
      
      
      let sum = "-";
      insideN += " " + sum;
      
    }
    else if (i == range - 1) {
      if (n > 0 && n < range - 1) {
        let sum = "|";
        insideN += " " + sum;
        
      } 
      else {
      let sum = "+";
      insideN += " " + sum;
      }
    }
    
    
    
    }
    console.log(insideN);
    insideN = "";
  
  }
  
  }