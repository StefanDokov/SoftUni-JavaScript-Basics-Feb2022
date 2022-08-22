function bonus(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);
    let perc = Number(input[2]);
    let index = 3;
    let vsplosht = h * w * 4;
    let nujno = vsplosht - (vsplosht * perc / 100);
    let boq = input[index];
    index++;
    while (boq !== "Tired!") {
      let doza = Number(boq);
      nujno -= doza;
      if (nujno == 0) {
          console.log(`All walls are painted! Great job, Pesho!`);
          break;
      }
    if (nujno < 0) {
        console.log(`All walls are painted and you have ${Math.abs(nujno)} l paint left!`);
        break;
    } 
      boq = input[index];
      index++;
    }
    if (boq == "Tired!") {
    console.log(`${nujno} quadratic m left.`);
    }
    
    
    }