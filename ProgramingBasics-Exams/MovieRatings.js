function bonus(input) {
    let broj = Number(input[0]);
    let count = 1;
    let index = 1;
    let most = 0;
    let best = "";
    let low = 0;
    let worst = "";
    let sumo = 0;
    while (count <= broj) {
     
      let ime = input[index];
      index++;
      let rating = Number(input[index]);
      index++;
      if (count == 1) {
          low = rating;
          worst = ime;
          most = rating;
          best = ime;
          sumo += rating;
      }
      if (rating <= low && count > 1) {
          low = rating;
          worst = ime;
          sumo += rating;
      }
      else if (rating >= most && count > 1) {
          most = rating;
          best = ime;
          sumo += rating;
      }
      else if (rating > low && rating < most ) {
          sumo += rating;
      }
    
    
     count++;
    }
    let aver = sumo / broj; 
    
    
    console.log(`${best} is with highest rating: ${most.toFixed(1)}`);
    console.log(`${worst} is with lowest rating: ${low.toFixed(1)}`);
    console.log(`Average rating: ${aver.toFixed(1)}`);
    
    
    
    }