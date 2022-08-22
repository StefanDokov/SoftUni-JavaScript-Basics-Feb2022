function movie(input) {
    
    let fuelVid = input[0];
    let liters = Number(input[1]);
    let clubCard = input[2]; 
    let bensin = 2.22;
    let dieso = 2.33;
    let gaso = 0.93;  
    let bens = 2.22 - 0.18;
    let dies = 2.33 - 0.12;
    let gasi = 0.93 - 0.08;
   

    if (liters >= 20 && liters <= 25 && clubCard == "No" && fuelVid == "Gasoline") {
         let sum = liters * bensin;
         sum *= 0.92;
         console.log(`${sum.toFixed(2)} lv.`);
    }
   else if (liters >= 20 && liters <= 25 && clubCard == "No" && fuelVid == "Diesel") {
       let sum = liters * dieso;
       sum *= 0.92;
       console.log(`${sum.toFixed(2)} lv.`);
   }
   else if (liters >= 20 && liters <= 25 && clubCard == "No" && fuelVid == "Gas") {
       let sum = liters * gaso;
       sum *= 0.92
       console.log(`${sum.toFixed(2)} lv.`);
   }
   else if (liters > 25  & clubCard == "No" && fuelVid == "Gasoline") {
       let sum = liters * bensin;
       sum *=0.9;
       console.log(`${sum.toFixed(2)} lv.`);
   }
   else if (liters > 25  & clubCard == "No" && fuelVid == "Diesel") {
    let sum = liters * dieso;
    sum *=0.9;
    console.log(`${sum.toFixed(2)} lv.`);
}
   else if (liters > 25  & clubCard == "No" && fuelVid == "Gas") {
    let sum = liters * gaso;
    sum *=0.9;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters >= 20 && liters <= 25 && clubCard == "Yes" && fuelVid == "Gasoline") {
    let sum = liters * bens;
    sum *= 0.92;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters >= 20 && liters <= 25 && clubCard == "Yes" && fuelVid == "Diesel") {
    let sum = liters * dies;
    sum *= 0.92;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters >= 20 && liters <= 25 && clubCard == "Yes" && fuelVid == "Gas") {
    let sum = liters * gasi;
    sum *= 0.92;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters > 25  & clubCard == "Yes" && fuelVid == "Gasoline") {
    let sum = liters * bens;
    sum *=0.9;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters > 25  & clubCard == "Yes" && fuelVid == "Diesel") {
    let sum = liters * dies;
    sum *=0.9;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters > 25  & clubCard == "Yes" && fuelVid == "Gas") {
    let sum = liters * gasi;
    sum *=0.9;
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters < 20 && clubCard == "No" && fuelVid == "Diesel") {
    let sum = liters * dieso;
    
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters < 20 && clubCard == "No" && fuelVid == "Gasoline") {
    let sum = liters * bensin;
    
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters < 20 && clubCard == "No" && fuelVid == "Gas") {
    let sum = liters * gaso;
    
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters < 20 && clubCard == "Yes" && fuelVid == "Diesel") {
    let sum = liters * dies;
    
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters < 20 && clubCard == "Yes" && fuelVid == "Gasoline") {
    let sum = liters * bens;
    
    console.log(`${sum.toFixed(2)} lv.`);
}
else if (liters < 20 && clubCard == "Yes" && fuelVid == "Gas") {
    let sum = liters * gasi;
    
    console.log(`${sum.toFixed(2)} lv.`);
}
}