function bonus(input) {
    
    let month = input[0];
    let stays = Number(input[1]);
    let stud = 0;
    let apa = 0;
    
    if (month == "May" || month == "October"){
      stud = stays * 50;
      apa = stays * 65;
      if (stays > 7 && stays <= 14) {
          stud = stud * 0.95;
      }
      else if (stays > 14) {
          stud = stud * 0.7;
          apa = apa * 0.9;
      }
    }
    else if (month == "June" || month == "September") {
        stud = stays * 75.20;
        apa = stays * 68.70;
        if (stays > 14) {
            stud = stud * 0.8;
            apa = apa * 0.9;
        }
    }
    else if (month == "July" || month == "August") {
        stud = stays * 76;
        apa = stays * 77;
    
    if (stays > 14) {
        apa = apa * 0.9;
    }
}
    console.log(`Apartment: ${apa.toFixed(2)} lv.`);
    console.log(`Studio: ${stud.toFixed(2)} lv.`);
    
}