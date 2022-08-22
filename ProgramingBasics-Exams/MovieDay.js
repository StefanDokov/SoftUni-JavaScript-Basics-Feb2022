function bonus(input) {

    let vreme = Number(input[0]);
    let sceni = Number(input[1]);
    let time = Number(input[2]);
    
    
    let nachalo = vreme * 0.15;
    let gg = sceni * time + nachalo;
    let diff = Math.abs(vreme - gg);
    if (gg < vreme) {
      console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`);
    }
    else {
      console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`);
    }
    
    
    
    
    }