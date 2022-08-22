function bonus(input) {
    let naem = Number(input[0]);
    let statu = naem * 0.7;
    let cater = statu * 0.85;
    let zvuk = cater / 2;
    
    let sum = naem + statu + cater + zvuk;
    console.log(sum.toFixed(2));
    
    }