function bonus(input) {
    let n = Number(input[0]);
    let ow = 0;
    let forn = 0;
    let hs = 0;
    let oder = 0;
    
    for (let i = 1; i <= n; i++){
        let game = input[i];
       if (game == "Hearthstone") {
           hs++;
       }
       else if (game == "Fornite") {
           forn++;
       }
       else if (game == "Overwatch") {
           ow++;
       }
       else {
           oder++;
       }
         
    
    }
    let hsper = hs / n * 100;
    let fornper = forn / n * 100;
    let owper = ow / n * 100;
    let oderper = oder / n * 100;
    
    console.log(`Hearthstone - ${hsper.toFixed(2)}% `);
    console.log(`Fornite - ${fornper.toFixed(2)}% `);
    console.log(`Overwatch - ${owper.toFixed(2)}% `);
    console.log(`Others - ${oderper.toFixed(2)}% `);
    
    }