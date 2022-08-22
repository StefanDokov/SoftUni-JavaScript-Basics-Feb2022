function bonus(input) {
    let kozun = Number(input[0]);
    let eggz = Number(input[1]);
    let kgkorab = Number(input[2]);
  
    let kozcena = kozun * 3.20;
    let egsi = eggz * 4.35;
    let vsqjca = eggz * 12;
    let cenakorab = kgkorab * 5.4;
    let boqcena = vsqjca * 0.15;
    let supreme = kozcena + egsi + cenakorab + boqcena;
    console.log(supreme.toFixed(2));
  }