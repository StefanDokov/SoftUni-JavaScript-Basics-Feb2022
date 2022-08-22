function bonus(input) {
    let edni = Number(input[0]);
    let dvi = Number(input[1]);
    let tre = Number(input[2]);
    
    for (let i = 1; i <= edni;i++){
      for (let w = 1; w <= dvi;w++){
        for (let m = 1; m <= tre;m++){
  
        
      
      if(i % 2 == 0 && (w == 2 || w == 3 || w == 5|| w == 7) && m % 2 == 0){
        console.log (`${i} ${w} ${m}`);
      
        }
      }
    }
      }
    }