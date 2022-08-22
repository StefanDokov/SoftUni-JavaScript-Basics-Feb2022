function bonus(input) {

    let index = 2;
    let sidea = Number(input[0]);
    let sideb = Number(input[1]);
    let whole = sidea * sideb;
    let parche = input[index];
    index++;
    
    
    
    
    while (parche !== "STOP"){
        let reji = Number(parche);
        whole -= reji;
        if (whole <= 0) {
            console.log(`No more cake left! You need ${Math.abs(whole)} pieces more.`);
            break;
        }
        
        parche = input[index];
        index++;
        
    }
    
    if (parche == "STOP") {
        
        if (whole > 0){
        console.log(`${Math.abs(whole)} pieces are left.`);
        }
    
         else {
        console.log(`No more cake left! You need ${Math.abs(whole)} pieces more.`);
        
    }
    }

}