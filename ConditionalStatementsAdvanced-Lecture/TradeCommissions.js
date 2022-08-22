function movie(input) {
    
    
    let city = input[0];
    let sales = Number(input[1]);

    if (city == "Sofia") {
        if (sales>= 0 && sales <= 500) {
            let yes = sales * 5 / 100;
            console.log(yes.toFixed(2));
        }
    
        else if (sales > 500 && sales <=1000){
            let yes = sales * 7 / 100;
            console.log(yes.toFixed(2));

        }
        else if (sales > 1000 && sales <=10000){
            let yes = sales * 8 / 100;
            console.log(yes.toFixed(2));

        }
        else if (sales > 10000){
            let yes = sales * 12 / 100;
            console.log(yes.toFixed(2));

        }
        else {
            console.log("error");
        }

    
}
else if (city == "Varna") {
    if (sales>= 0 && sales <= 500) {
        let yes = sales * 4.5 / 100;
        console.log(yes.toFixed(2));
    }

    else if (sales > 500 && sales <=1000){
        let yes = sales * 7.5 / 100;
        console.log(yes.toFixed(2));

    }
    else if (sales > 1000 && sales <=10000){
        let yes = sales * 10 / 100;
        console.log(yes.toFixed(2));

    }
    else if (sales > 10000){
        let yes = sales * 13 / 100;
        console.log(yes.toFixed(2));

    }
    else {
        console.log("error");
    }


}
else if (city == "Plovdiv") {
    if (sales>= 0 && sales <= 500) {
        let yes = sales * 5.5 / 100;
        console.log(yes.toFixed(2));
    }

    else if (sales > 500 && sales <=1000){
        let yes = sales * 8 / 100;
        console.log(yes.toFixed(2));

    }
    else if (sales > 1000 && sales <=10000){
        let yes = sales * 12 / 100;
        console.log(yes.toFixed(2));

    }
    else if (sales > 10000){
        let yes = sales * 14.5 / 100;
        console.log(yes.toFixed(2));

    }
    else {
        console.log("error");
    }


}
else {
    console.log("error");
}
}