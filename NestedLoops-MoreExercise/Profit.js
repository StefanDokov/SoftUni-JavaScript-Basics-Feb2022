function bonus(input) {
    let edni = Number(input[0]);
    let dvi = Number(input[1]);
    let peti = Number(input[2]);
    let sum = Number(input[3]);
  
  for (let i = 0; i <= edni;i++){
    for (let k = 0; k <= dvi;k++){
      for (let s = 0;s <= peti;s++){
  
      let ino = i * 1;
      let deno = k * 2;
      let peteno = s * 5;
      let gg = ino + deno + peteno;
     
      if (gg == sum) {
       console.log(`${i} * 1 lv. + ${k} * 2 lv. + ${s} * 5 lv. = ${sum} lv.`);
     }
  
  
      }
      
      }
    }
  }