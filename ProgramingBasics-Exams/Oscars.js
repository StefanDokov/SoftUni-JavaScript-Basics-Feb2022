function bonus(input) {
    let ime = input[0];
    let tochki = Number(input[1]);
    let jury = Number(input[2]);
    let index = 3;
    let nujno = 1250.5;
   let gg = true;
    for (let i = 1; i <= jury;i++){
     let jur = input[index];
     index++;
     let points = Number(input[index]);
     index++;
     let ocenka = (jur.length * points) / 2;
   
     tochki += ocenka;
     if (tochki > nujno) {
       console.log(`Congratulations, ${ime} got a nominee for leading role with ${tochki.toFixed(1)}!`);
       gg = false;
       break;
     }
   
   
   
   
    }
    let diff = Math.abs(nujno - tochki);
    if (gg){
   
   console.log(`Sorry, ${ime} you need ${diff.toFixed(1)} more!`);
   
    }
   
   }