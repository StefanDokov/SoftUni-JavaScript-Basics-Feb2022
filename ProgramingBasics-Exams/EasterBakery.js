function bonus(input) {
    let cenabrash = Number(input[0]);
    let kgbrash = Number(input[1]);
    let kgzahar = Number(input[2]);
    let koriqjca = Number(input[3]);
    let maq = Number(input[4]);
  
    let cenazahar = cenabrash * 0.75;
    let cenakori = cenabrash * 1.1;
    let cenamaq = cenazahar * 0.2;
  
    let supreme = (cenabrash * kgbrash) + (cenazahar * kgzahar) + (cenakori * koriqjca) + (cenamaq * maq);
    console.log(supreme.toFixed(2));
  
  }