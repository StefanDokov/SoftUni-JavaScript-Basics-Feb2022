function bonus(input) {
    let str = Number(input[0]);
    let sum = 0;
    for (let i = 1; i <= 10; i ++){
        sum = i * str;
        console.log(`${i} * ${str} = ${sum}`)
    }
}