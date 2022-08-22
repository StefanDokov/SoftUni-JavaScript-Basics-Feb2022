function bonus() {
    let sum  = 0;

  for (let h = 1; h <= 10; h++) {
       for (let m = 1; m <= 10; m++ ) {
            sum = h * m;
            console.log(`${h} * ${m} = ${sum}`);

       }
  }
  
}