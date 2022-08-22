function bonus(input) {
    let qjca = Number(input[0]);
    let vsich = 0;
    let index = 1;
    let resu = input[index];
    index++;
    while (resu !== "Close"){
      let nume = Number(input[index]);
      index++;
      if (resu == "Fill"){
        
        qjca += nume;
      }
      if (resu == "Buy"){
        if (nume > qjca) {
          console.log(`Not enough eggs in store!`);
          console.log(`You can buy only ${qjca}.`);
          break;
        }
        else {
          qjca -= nume;
          vsich += nume;
        }
      }
      resu = input[index];
      index++;
    }
    if (resu == "Close"){
      console.log(`Store is closed!`);
      console.log(`${vsich} eggs sold.`);
    }
   
  
  }