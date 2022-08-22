function bonus(input) {
     
    let floor = Number(input[0]);
    
    let aparts = Number(input[1]);
    
    
    

    for (let et = floor; et > 0; et--){
         let res = "";
         for (let ap = 0; ap < aparts; ap++) {
              if (et % 2 == 0 && et !== floor) {
             res += `O${et}${ap} `;
              

              
              }
              else if (et == floor){
                  res += `L${et}${ap} `;
                  
                  
              }
              else {
                   res += `A${et}${ap} `;
                   

                   
              }
              
         
         }
         console.log(res);
    }
    
}