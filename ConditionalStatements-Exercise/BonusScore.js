function bonus(input) {
    
    let numba = Number(input[0]);
    
    
    
    if (numba <= 100 && numba % 2 == 0) {
        let bonux = 5 + 1;
        let sum = numba + bonux;
        
    console.log(bonux);
    console.log(sum);
}
else if (numba <= 100 && numba % 5 == 0) {
    let bonux = 5 + 2;
    let sum = numba + bonux;
    
console.log(bonux);
console.log(sum);
}
else if (numba <= 100) {
    let bonux = 5;
    let sum = numba + bonux;
    
console.log(bonux);
console.log(sum);
}
else if (numba > 100 && numba <= 1000 && numba % 2 == 0){
    let bonux = numba * 20 / 100 + 1;
    let sum = numba + bonux;
    
    console.log(bonux);
    console.log(sum);
}
else if (numba > 100 && numba <= 1000 && numba % 5 == 0){
    let bonux = numba * 20 / 100 + 2;
    let sum = numba + bonux;
    
    console.log(bonux);
    console.log(sum);
}
else if (numba > 100 && numba <= 1000){
    let bonux = numba * 20 / 100;
    let sum = numba + bonux;
    
    console.log(bonux);
    console.log(sum);
}
else if (numba > 1000 && numba % 2 == 0) {
    let bonux = numba * 10 /100 + 1;
    let sum = numba + bonux;

    console.log(bonux);
    console.log(sum);
}
else if (numba > 1000 && numba % 5 == 0) {
    let bonux = numba * 10 /100 + 2;
    let sum = numba + bonux;

    console.log(bonux);
    console.log(sum);
}
else if (numba > 1000) {
    let bonux = numba * 10 /100;
    let sum = numba + bonux;

    console.log(bonux);
    console.log(sum);
}
}