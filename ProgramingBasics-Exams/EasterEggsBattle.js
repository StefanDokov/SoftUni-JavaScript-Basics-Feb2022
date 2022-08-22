function bonus(input) {
    let qjcaone = Number(input[0]);
    let qjcatwo = Number(input[1]);
    let index = 2;
    let resu = input[index];
    index++;
  
    while (resu !== "End"){
      if (resu == "one"){
        qjcatwo--;
      }
      else if (resu == "two"){
        qjcaone--;
      }
      if (qjcaone == 0){
       console.log(`Player one is out of eggs. Player two has ${qjcatwo} eggs left.`);
       break;
      }
      if (qjcatwo == 0){
        console.log(`Player two is out of eggs. Player one has ${qjcaone} eggs left.`);
        break;
      }
      resu = input[index];
      index++;
    }
    if (resu == "End"){
      console.log(`Player one has ${qjcaone} eggs left.`);
      console.log(`Player two has ${qjcatwo} eggs left.`);
    }
  
  }