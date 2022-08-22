function bonus(input) {
    
    let chisloedno = Number(input[0]);
    let chislodve = Number(input[1]);
    let opera = input[2];
    let sum = 0;
    let finish = 0;
    
    
    
   
        switch(opera) {
        case "+":
           
           sum = chisloedno + chislodve;
           
           if (sum % 2 == 0) {
            finish = "even";
            
        }
            else {
            finish = "odd";
            
        }
        console.log (`${chisloedno} ${opera} ${chislodve} = ${sum} - ${finish}`);
          

           break;
           case "-":
            
               sum = chisloedno - chislodve;
            
               if (sum % 2 == 0) {
                finish = "even";
            }
            else {
                finish = "odd";
            }
            console.log (`${chisloedno} ${opera} ${chislodve} = ${sum} - ${finish}`); 
               break;
               case "*":
                
                
                sum = chisloedno * chislodve;
                   if (sum % 2 == 0) {
                    finish = "even";
                }
                else {
                    finish = "odd";
                }
                console.log (`${chisloedno} ${opera} ${chislodve} = ${sum} - ${finish}`);
        break;
        case "/":
            
            
            sum = chisloedno / chislodve;
            if (chislodve == 0) {
                console.log(`Cannot divide ${chisloedno} by zero`)
            }
            else {
            console.log (`${chisloedno} ${opera} ${chislodve} = ${sum.toFixed(2)}`);
            }
            break;
            case "%":
                sum = chisloedno % chislodve;

                if (chislodve == 0) {
                    console.log(`Cannot divide ${chisloedno} by zero`)
                }
                
                else {
                console.log (`${chisloedno} ${opera} ${chislodve} = ${sum}`);
                }
                
                break;        
   }
}