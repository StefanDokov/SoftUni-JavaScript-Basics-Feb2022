function menus(input) {
    
    const chikan = 10.35;
    const fish = 12.4;
    const vegan = 8.15;
    const deliver = 2.5;
    const chiMenu = Number(input[0]);
    const fishMenu = Number(input[1]);
    const vegMenu = Number(input[2]);
    let chiBox = chiMenu * chikan;
    let fishBox = fishMenu * fish;
    let vegBox = vegMenu * vegan;
    let sumAll = chiBox + fishBox + vegBox;
    let dezert = sumAll * 20 / 100;
    let sumSupreme = sumAll + dezert + deliver;

    
    
    console.log(sumSupreme);
    
}