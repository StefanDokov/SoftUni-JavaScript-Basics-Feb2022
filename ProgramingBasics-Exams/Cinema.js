function bonus(input) {
    let mesta = Number(input[0]);
    let index = 1;
    let hora = input[index];
    index++;
    let full = 0;
    let pulno = true;
    while (hora !== "Movie time!"){
      let ppl = Number(hora);
      if (ppl > mesta) {
        console.log(`The cinema is full.`);
        pulno = false;
      break
      }
      mesta -= ppl;
      
      let vs = ppl * 5;
    if (ppl % 3 == 0) {
      vs -= 5;
    }
    full += vs;
    
   
      hora = input[index];
      index++;
    
    
    
    }
    
    if (hora == "Movie time!" || (mesta == 0) && pulno){
      console.log(`There are ${mesta} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${full} lv.`);
    }