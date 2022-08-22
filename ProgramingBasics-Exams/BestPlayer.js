function bonus(input) {
    let index = 0;
   let name = input[index];
   index++;
   let most = 0;
   let best = "";
   let isbigger = false;
   while (name !== "END") {
      let goals = Number(input[index]);
      index++;
      
      if (goals > most && goals < 10) {
        most = goals;
        best = name;
      }
      else if (goals >= 10) {
        most = goals;
        best = name;
        isbigger = true;
        break;
      }
  
      
      name = input[index];
      index++;
  
    
   
   }
   
    if (most >= 3 || isbigger) {
      console.log(`${best} is the best player!`);
      console.log(`He has scored ${most} goals and made a hat-trick !!!`);
    }
    else {
      console.log(`${best} is the best player!`);
      console.log(`He has scored ${most} goals.`);
    }
  }