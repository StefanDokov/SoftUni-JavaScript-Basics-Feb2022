function bonus(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let sum = 0;
    
    
    

    for(i = 2; i <= n + 1; i++) {
        let tab = input[i];
        
    
        if (tab == "Facebook") {
            sum += 150;
        }
        else if (tab == "Instagram") {
            sum += 100;
        }
        else if (tab == "Reddit") {
            sum += 50;
        }
    }   
    
    let go = Math.abs(salary - sum);
    
    if (sum >= salary) {
        console.log(`You have lost your salary.`)
    }
    else if (sum < salary) {
        console.log(go);
    }
    

        
        
}