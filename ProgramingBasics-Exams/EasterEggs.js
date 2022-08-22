function bonus(input) {
    let qjca = Number(input[0]);
    let ora = 0;
    let blu = 0;
    let gre = 0;
    let reda = 0;
    let bes = 0;
    let ede = 0;
    
    for (let i = 1; i <= qjca; i++){
      let cvqt = input[i];
      if (cvqt == "orange"){
       ora++;
      }
      if (cvqt == "blue"){
        blu++;
      }
      if (cvqt == "green"){
        gre++;
      }
      if (cvqt == "red"){
        reda++;
      }
    }
    if (ora > blu && ora > gre && ora > reda){
      bes = ora;
      ede = "orange";
    }
    if (blu > ora && blu > gre && blu > reda){
      bes = blu;
      ede = "blue";
    }
    if (gre > blu && gre > ora && gre > reda){
      bes = gre;
      ede = "green";
    }
    if (reda > blu && reda > gre && reda > ora){
      bes = reda;
      ede = "red";
    }
    console.log(`Red eggs: ${reda}`);
    console.log(`Orange eggs: ${ora}`);
    console.log(`Blue eggs: ${blu}`);
    console.log(`Green eggs: ${gre}`);
    console.log(`Max eggs: ${bes} -> ${ede}`);
    
  }