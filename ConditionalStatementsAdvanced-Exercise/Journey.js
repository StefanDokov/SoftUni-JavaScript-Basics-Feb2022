function bonus(input) {
    
    let bujet = Number(input[0]);
    let season = input[1];
    let money = 0;
    
   
    if (bujet <= 100) {
        if (season === "summer"){
            money = bujet * 0.3;
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${money.toFixed(2)}`);
        } 
        else {
            money = bujet * 0.7;
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${money.toFixed(2)}`);

        }
    }
    else if (bujet <= 1000) {
        if (season === "summer"){
            money = bujet * 0.4;
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${money.toFixed(2)}`);
        } 
        else {
            money = bujet * 0.8;
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${money.toFixed(2)}`);

        }
        
    }
    else {
        money = bujet * 0.9;
            console.log(`Somewhere in Europe`);
            console.log(`Hotel - ${money.toFixed(2)}`);
    }
        
        
}