function bonus(input) {
    let index = 0;
    let tovari = Number(input[index++]);
    let bus = 0;
    let truck = 0;
    let train = 0;
    let all = 0;
    
    
    
      
    
    for (let i = 0; i < tovari  ; i++) {
        let tonaji = Number(input[index++]);
        all += tonaji
        if (tonaji <= 3) {
            bus += tonaji;
        }
        else if (tonaji > 3 && tonaji <= 11) {
            truck += tonaji;
        }
        else {
            train += tonaji;
        }
        
}
    let sredno = ((bus * 200) + (truck * 175) + (train * 120)) / all ;
    let sreBus = (bus / all) * 100;
    let sreTru = (truck / all) * 100;
    let sreTra = (train / all) * 100;
    console.log(sredno.toFixed(2));
    console.log(`${sreBus.toFixed(2)}%`);
    console.log(`${sreTru.toFixed(2)}%`);
    console.log(`${sreTra.toFixed(2)}%`);
}