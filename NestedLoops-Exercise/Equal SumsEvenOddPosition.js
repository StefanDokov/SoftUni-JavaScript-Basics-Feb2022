function bonus(input) {
     
    let basic = Number(input[0]);
    let masic = Number(input[1]);
    
    
    let printC = "";
    
    
    
     for (let i = basic; i <= masic; i++){
          
         let current = "" + i;
         let sumo = 0;
         let sumb = 0;
          for (let s = 0; s < current.length; s++){
               let omg = Number(current.charAt(s));
               if (s % 2 === 0) {
                    sumo += omg;
               }
               else {
                    sumb += omg;
               }

}   
if (sumo === sumb) {
    printC += `${i} `
}
}
console.log(printC);
}