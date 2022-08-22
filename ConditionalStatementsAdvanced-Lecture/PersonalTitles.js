function movie(input) {
    
    let years = Number(input[0]);
    let saxo = input[1];

    if (years >= 16) {
        switch(saxo) {
            case "f": console.log("Ms.");break;
            case "m": console.log("Mr.");break;
        }

    }
    else {
        switch(saxo) {
            case "f": console.log("Miss");break;
            case "m": console.log("Master");break;
        }
    }
}