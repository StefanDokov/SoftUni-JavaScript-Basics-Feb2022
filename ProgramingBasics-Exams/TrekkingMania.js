function bonus(input) {
    let groups = Number(input[0]);
    let all = 0;
    let musala = 0;
    let monblan = 0;
    let kaliman = 0;
    let kdve = 0;
    let everest = 0;
   
    for (let i = 1; i <= groups;i++){
        let ppl = Number(input[i]);
        all += ppl;
        if (ppl <= 5) {
            musala += ppl;
        }
        else if (ppl > 5 && ppl <= 12){
            monblan +=ppl;
        }
        else if (ppl > 12 && ppl <= 25){
            kaliman += ppl;
        }
        else if (ppl > 25 && ppl <= 40){
            kdve += ppl;
        }
        else {
            everest += ppl;
        }
    }
       let musper = musala / all * 100;
       let monper = monblan / all * 100;
       let kaliper = kaliman / all * 100;
       let kdveper = kdve / all * 100;
       let everper = everest / all * 100;
   
       console.log(`${musper.toFixed(2)}%`);
       console.log(`${monper.toFixed(2)}%`);
       console.log(`${kaliper.toFixed(2)}%`);
       console.log(`${kdveper.toFixed(2)}%`);
       console.log(`${everper.toFixed(2)}%`);
   
   }