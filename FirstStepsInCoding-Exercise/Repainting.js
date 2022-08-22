function mats(input) {
    
    
    const nylon = 1.5;
    const paint = 14.5;
    const cleaner = 5;
    const packs = 0.4;
    let nylNumb = Number(input[0]);
    let paintNumb = Number(input[1]);
    let cleanLit = Number(input[2]);
    let hours = Number(input[3]);
    let paintPercent = paintNumb + (paintNumb * 10 /100);
    let sumMats = (nylon * (nylNumb + 2)) + (paint * paintPercent) + (cleaner * cleanLit) + packs;
    let workHour = sumMats * 30 /100;
    let sumSupreme = sumMats + workHour * hours;


    
    
    console.log(sumSupreme);
    
}