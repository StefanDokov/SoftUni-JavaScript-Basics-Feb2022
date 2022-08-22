function bonus(input) {
    let n = Number(input[0]);
    let sum = 0;
    let ora = 0;
    let reda = 0;
    let yel = 0;
    let whit = 0;
    let oder = 0;
    let divblack = 0;
    for (let i = 1; i <= n; i++) {
      let cvqt = input[i];
      switch(cvqt) {
          case "red": sum += 5;
                     reda++;
                      break;
                      case "orange":
                        sum += 10;
                        ora++;
                        break;
                        case "yellow": sum += 15;
                        yel++;
                        break;
                        case "white" :
                          sum += 20;
                          whit++;
                          break;
                          case "black":
                            sum = Math.floor(sum / 2);
                            divblack++;
                            break;
                         default:
                           oder++;
                           continue;
   }
    }
     console.log(`Total points: ${sum}`);
     console.log(`Red balls: ${reda}`);
     console.log(`Orange balls: ${ora}`);
     console.log(`Yellow balls: ${yel}`);
     console.log(`White balls: ${whit}`);
     console.log(`Other colors picked: ${oder}`);
     console.log(`Divides from black balls: ${divblack}`);
   }