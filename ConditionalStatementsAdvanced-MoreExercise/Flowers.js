function bonus(input) {
    
    let numbHrisan = Number(input[0]);
    let numbRoses = Number(input[1]);
    let numbLale = Number(input[2]);
    let season = input[3];
    let day = input[4];
    let full = 0;
    let ros = 0;
    let hris = 0;
    let lal = 0;
    
    
    switch(season) {
        case "Spring":
            
            
            hris = 2 * numbHrisan;
            ros = 4.1 * numbRoses;
            lal = 2.5 * numbLale;

            
            full = hris + ros + lal;
            if (day == "Y") {
                full = full + (full * 15 / 100);
            }
            
            if (numbLale > 7) {
                full =  full - (full * 5 / 100);
            }
            break;
        case "Summer":
            
                hris = 2 * numbHrisan;
                ros = 4.1 * numbRoses;
                lal = 2.5 * numbLale;
    
                
                full = hris + ros + lal;
                if (day == "Y") {
                    full = full + (full * 15 / 100);
                }

        
            break;
        case "Autumn":
            
            hris = 3.75 * numbHrisan;
            ros = 4.5 * numbRoses;
            lal = 4.15 * numbLale;

            
            full = hris + ros + lal;
            if (day == "Y") {
                full = full + (full * 15 / 100);
            }
            
            break;
        case "Winter":
            
                hris = 3.75 * numbHrisan;
                ros = 4.5 * numbRoses;
                lal = 4.15 * numbLale;
    
                
                full = hris + ros + lal;
                if (day == "Y") {
                    full = full + (full * 15 / 100);
                }
            if (numbRoses >= 10) {
                full = full - (full * 10 / 100);
            }
            break;
    }
    
    if (numbHrisan + numbLale + numbRoses > 20) {
        full = full - (full * 20 / 100);
    }
       full = full + 2;
    console.log(full.toFixed(2));

}