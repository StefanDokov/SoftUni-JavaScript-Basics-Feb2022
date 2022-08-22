function bonus(input) {
    let index = 0;
  let name = input[index];
  index++;
  let gg = 1;
  let wino = 0;
  let loso = 0;
  let igri = 0;
  while (name !== "End of tournaments"){
      let gamez = Number(input[index]);
      index++;
      igri += gamez;
      while (gg <= gamez) {
          let doma = Number(input[index]);
          index++;
          let gost = Number(input[index]);
          index++;
          let diff = Math.abs(doma - gost);
          if (doma > gost){
              wino++;
          console.log(`Game ${gg} of tournament ${name}: win with ${diff} points.`);
          } 
          if (doma < gost){
              loso++;
              console.log(`Game ${gg} of tournament ${name}: lost with ${diff} points.`);
          }
          gg++;
      }
      if (gg > gamez){
          gg = 1;
          name = input[index];
          index++;
      }
  
}
let winrato = wino / igri * 100;
let losrato = loso / igri * 100;
if (name == "End of tournaments"){
    console.log(`${winrato.toFixed(2)}% matches win`);
    console.log(`${losrato.toFixed(2)}% matches lost`);
}
}