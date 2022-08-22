function bonus(input) {

    
    let storm = Number(input[0]);
    let start = storm * 100;
    let moneti = 0;
    
    while (start >= 200){
          start -= 200;
          moneti += 1;
    }
    while (start >= 100 && start < 200) {
        start -= 100;
        moneti += 1;
    }
    while (start < 100 && start >= 50) {
        start -= 50;
        moneti += 1;
    }
    while (start < 50 && start >= 20) {
        start -= 20;
        moneti += 1;
    }
    while (start < 20 && start >= 10) {
        start -= 10;
        moneti += 1;
    }
    while (start < 10 && start >= 5) {
        start -= 5;
        moneti += 1;
    }
    while (start < 5 && start >= 2) {
        start -= 2;
        moneti += 1;
    }
    if (start === 1) {
        start -= 1;
        moneti += 1;
    }
   console.log(moneti);

}