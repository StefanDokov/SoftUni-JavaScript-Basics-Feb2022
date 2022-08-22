function bonus(input) {
    
    let buget = Number(input[0]);
    let season = input[1];
    let claso = 0;
    let typo = 0;


    
    
    
        if (season == "Summer") {
                if (buget <= 100) {
                claso = "Economy class";
                typo = "Cabrio";
                buget *= 0.35;
            }
            else if (buget > 100 && buget <= 500) {
                claso = "Compact class";
                typo = "Cabrio";
                buget *= 0.45;
            }
            else {
                claso = "Luxury class";
                typo = "Jeep";
                buget *= 0.9;
            }
        }
            
        else {
                if (buget <= 100) {
                claso = "Economy class";
                typo = "Jeep";
                buget *= 0.65;
                }
                else if (buget > 100 && buget <= 500) {
                claso = "Compact class";
                typo = "Jeep";
                buget *= 0.8;
                }
                else {
                claso = "Luxury class";
                typo = "Jeep";
                buget *= 0.9;
                    
        }
        }
    
    
    
    

console.log(claso);
console.log(`${typo} - ${buget.toFixed(2)}`)
}