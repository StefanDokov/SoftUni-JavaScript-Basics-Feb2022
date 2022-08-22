function bonus(input) {
    
    let gradusi = Number(input[0]);
    let timespan = input[1];
    

   

    switch(timespan) {
        case "Morning": 
        if (gradusi >=10 && gradusi <= 18) {
            let outfit = "Sweatshirt";
            let shoes = "Sneakers";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
            
        }
        else if (gradusi > 18 && gradusi <= 24){
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        else {
            let outfit = "T-Shirt";
            let shoes = "Sandals";
            console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
        }
        break;
        case "Afternoon":
            if (gradusi >=10 && gradusi <= 18) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
            }
            else if (gradusi > 18 && gradusi <= 24){
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
            }
            else {
                let outfit = "Swim Suit";
                let shoes = "Barefoot";
                console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
            }
            break;
            
            case "Evening":
                if (gradusi >=10 && gradusi <= 18) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
                    
                }
                else if (gradusi > 18 && gradusi <= 24){
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
                }
                else {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
                }
               break;
            }
}