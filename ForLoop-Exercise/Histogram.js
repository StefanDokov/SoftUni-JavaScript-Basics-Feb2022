function bonus(input) {
    let n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= n; i ++){
        let num = Number(input[i]);
        
       if (num < 200) {
           p1Counter++
       }
       else if (num >= 200 && num < 400) {
           p2Counter++
       }
       else if (num >= 400 && num < 600) {
           p3Counter++
       }
       else if (num >= 600 && num < 800) {
           p4Counter++
       }
       else {
           p5Counter++
       }
    }
    console.log(`${(p1Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p2Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p3Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p4Counter / n * 100).toFixed(2)}%`);
    console.log(`${(p5Counter / n * 100).toFixed(2)}%`);
}