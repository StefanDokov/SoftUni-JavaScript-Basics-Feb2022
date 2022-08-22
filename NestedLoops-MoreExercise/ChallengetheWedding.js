function bonus(input) {
    let meno = Number(input[0]);
    let jeno = Number(input[1]);
    let tables = Number(input[2]);
    let chislo = 0;
    let sum = "";
    
    for (let i = 1; i <= meno;i++){
      for(let k = 1;k <= jeno;k++){
        chislo++;
        let eno = Number(i);
        let deno = Number(k);
        let gg = ("("+ eno +" <-> " + deno +")");
        if (chislo <= tables) {
          sum += `${gg} `;
        }
      }
    }
      console.log(sum);
      
      
      
  }