function bonus(input) {
    
    let buget = Number(input[0]);
    let season = input[1];
    let location = 0;
    let place = 0;


    
    
    
        if (season == "Summer") {
                if (buget <= 1000) {
                place = "Camp";
                location = "Alaska";
                buget *= 0.65;
            }
            else if (buget > 1000 && buget <= 3000) {
                place = "Hut";
                location = "Alaska";
                buget *= 0.8;
            }
            else {
                place = "Hotel";
                location = "Alaska";
                buget *= 0.9;
            }
        }
            
        else {
                if (buget <= 1000) {
                place = "Camp";
                location = "Morocco";
                buget *= 0.45;
                }
                else if (buget > 1000 && buget <= 3000) {
                place = "Hut";
                location = "Morocco";
                buget *= 0.6;
                }
                else {
                place = "Hotel";
                location = "Morocco";
                buget *= 0.9;
                    
        }
        }
    
    
    
    


console.log(`${location} - ${place} - ${buget.toFixed(2)}`);
}