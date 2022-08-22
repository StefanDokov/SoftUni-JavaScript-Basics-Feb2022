function bonus(input) {
    let broj = Number(input[0]);
   let index = 1;
   let vsi = 0;
   let wino = 0;
   let winna = "";
  
    for (let i = 0;i < broj;i++){
     let name = input[index];
     index++;
     let ocenka = input[index];
     index++;
     while (ocenka !== "Stop"){
       let ocen = Number(ocenka);
       vsi += ocen;
  
     ocenka = input[index];
     index++;
  
     }
     if (ocenka == "Stop"){
     if (vsi > wino) {
       wino = vsi;
       winna = name;
       console.log(`${name} has ${vsi} points.`);
       console.log(`${name} is the new number 1!`);
       vsi = 0;
     }
     else {
       console.log(`${name} has ${vsi} points.`);
       vsi = 0;
     }
  
    }
  }
  
    console.log(`${winna} won competition with ${wino} points!`);
  
    
  }