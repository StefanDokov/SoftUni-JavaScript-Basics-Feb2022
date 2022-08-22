function movie(input) {
    
    let budget = Number(input[0]);
    const people = Number(input[1]);
    let costCostume = Number(input[2]);
    let costumeCost = people * costCostume;
    
   
    budget *= 0.9;
    
    if (people > 150) {
        costumeCost *= 0.9;
    }
      let allCosts = Math.abs(budget - costumeCost);
      
      if (costumeCost <= budget) {
          console.log(`Action!`);
          console.log(`Wingard starts filming with ${allCosts.toFixed(2)} leva left.`)
      }
      else {
          console.log(`Not enough money!`);
          console.log(`Wingard needs ${allCosts.toFixed(2)} leva more.`)
      }
    }