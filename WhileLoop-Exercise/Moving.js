function bonus(input) {

    let index = 3;
    let sidea = Number(input[0]);
    let sideb = Number(input[1]);
    let sidec = Number(input[2]);
    let whole = sidea * sideb * sidec;
    let kachon = input[index];
    index++;
    
    
    
    
    while (kachon !== "Done"){
        let shh = Number(kachon);
        whole -= shh;
        if (whole <= 0) {
            console.log(`No more free space! You need ${Math.abs(whole)} Cubic meters more.`);
            break;
        }
        kachon = input[index];
        index++;
}
      if (kachon === "Done") {
          console.log(`${Math.abs(whole)} Cubic meters left.`)
      }
    }