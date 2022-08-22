function bonus(input) {
    let index = 0;
    let name = input[index++];
    let points = Number(input[index++]);
    let n = Number(input[index++]);
    let sum = 0; 
    let all = 1250.5;

        let isNomi = false;
        for(let i = 0; i < n ; i++) {
            let nameJury = input[index++];
            let pointJury = Number(input[index++]);

            points += nameJury.length * pointJury / 2;

            if (points > all) {
                console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
                isNomi = true;
                break;
            }
        }
            if (!isNomi) {
                let diff = Math.abs(all - points);
                console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
                
                
            }

            }