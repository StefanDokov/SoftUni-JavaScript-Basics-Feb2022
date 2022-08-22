function bonus(input) {

    let index = 0;
    
    
    
    
    
    let all = "";
    let ccount = 0;
    let ocount = 0;
    let ncount = 0;
    
    let oni = "";
    
    let bukva = input[index];
    index++;
    
    
    while (bukva !== "End") {
      
     
      
        if (bukva !== "n" && bukva !== "o" && bukva !== "c" && bukva.match(/[a-z]/i)){
          all += bukva;
        }
        else {
          if (bukva == "n" && ncount == 0){
            ncount += 1;
          
          }
          else if(bukva == "n" && ncount == 1){
            all += bukva;
          }
         
          if (bukva == "o" && ocount == 0){
            ocount += 1;
        }
        else if (bukva == "o" && ocount == 1){
          all += bukva;
        }
        
        
          if (bukva == "c" && ccount == 0){
          ccount += 1;
        }
        else if (bukva == "c" && ccount == 1){
          all += bukva;
        }
        

        if (ncount == 1 && ocount == 1 && ccount == 1) {
          oni += all + " ";
          ncount = 0;
          ocount = 0;
          ccount = 0;
          all = "";
        }
 




        }
        
        bukva = input[index];
        index++;
        
        
            
           
    }
    if (bukva == "End") {
      console.log(oni);
    }
}