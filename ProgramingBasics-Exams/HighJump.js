function bonus(input) {
    let visochina = Number(input[0]);
    let starto = visochina - 30;
    let index = 1;
    let numbero = 0;
    let alljumps = 0;
    let skok = Number(input[index]);
    index++;
    while(starto <= visochina) {
        
        numbero++;
        alljumps++;
        
          if (skok > starto){
           starto += 5;
           numbero = 0;
           
  
       }
       if (numbero == 3){
          console.log(`Tihomir failed at ${starto}cm after ${alljumps} jumps.`);
          break;
      }
      
       skok = Number(input[index]);
       index++;
    }
    if (starto > visochina){
        
        console.log(`Tihomir succeeded, he jumped over ${visochina}cm after ${alljumps} jumps.`);
        
    }
  }