function bonus(input) {

    let index = 0;
    let start = input[index];
    index++
    let endgoal = 10000;

   

    
    
    
    while(start !== "Going home") {
        let stypki = Number(start);
        
        endgoal -= stypki;
        if(endgoal <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(endgoal)} steps over the goal!`);
            break;
        }
     
        start = input[index];
        index++;
}
if (start === "Going home") {
    let leftsteps = Number(input[index]);
    index++;
    endgoal -= leftsteps;
    if(endgoal <= 0) {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(endgoal)} steps over the goal!`);
}
else {
    console.log(`${endgoal} more steps to reach goal.`)
}
    
}
}