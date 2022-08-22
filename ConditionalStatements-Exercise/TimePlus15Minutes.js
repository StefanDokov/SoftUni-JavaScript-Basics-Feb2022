function clock(input) {
    
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    
    let extra = minutes + 15;
    let supa = extra - 60;
       
if (hour >= 0 & hour < 23 & extra > 60 & supa < 10) {
    console.log(`${hour + 1}:0${supa}`);
}
else if (hour >= 0 & hour < 23 & extra > 60 & supa >= 10) {
    console.log(`${hour + 1}:${supa}`);
}
else if (hour >= 0 & hour < 23 & extra == 60) {
    console.log(`${hour + 1}:00`);
} 
else if (hour >= 0 & hour <= 23 & extra < 60) {
    console.log(`${hour}:${extra}`);
}
else if (hour = 23 & extra > 60 & supa < 10) {
    console.log(`0:0${supa}`);
}
else if (hour = 23 & extra > 60 & supa >= 10) {
    console.log(`0:${supa}`);
}
else if (hour = 23 & extra == 60) {
    console.log(`0:00`);
}

}