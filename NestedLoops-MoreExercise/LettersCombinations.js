function bonus(input) {
  
    let counter = 0;
    let sta = input[0];
    let index = 0;
    let som = sta.charCodeAt(index);
    
    let endo = input[1];
    
    let sam = endo.charCodeAt(index);
    
    let d = input[2];
    let omg ="";
    let ses ="";
    
  for (let k = som; k <= sam;k++)  {
    
   for (let i = som; i <= sam; i++){
     
     for  (let j = som; j <= sam;j++){
       
      let a = String.fromCharCode(k);
      let b = String.fromCharCode(i);
      let c = String.fromCharCode(j);
       if (a !== d){
         if (b !== d) {
           if(c !== d) {
       counter += 1;
       omg = a + b + c;
       ses += `${omg} `;
     }
    }
       }  
   }  
  } 
  } 
    console.log (`${ses}${counter}`);
  } 