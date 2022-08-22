function mats(input) {
    
    
    const pensPack = 5.8;
    const markPack = 7.2;
    const washClean = 1.2;
    let penNumb = Number(input[0]);
    let markNumb = Number(input[1]);
    let washLit = Number(input[2]);
    let discounter = Number(input[3]/100);
    let sumEvery = (pensPack * penNumb) + (markPack * markNumb) + (washClean * washLit);
    let sumAll = sumEvery * discounter;
    let sumSupreme = sumEvery - sumAll


    
    
    console.log(sumSupreme);
    
}