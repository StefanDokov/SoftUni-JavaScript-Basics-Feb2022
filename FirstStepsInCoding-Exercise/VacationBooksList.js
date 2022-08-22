function deposit(input) {
    
    
    let pages = Number(input[0]);
    let perHour = Number(input[1]);
    let daysNeeded = Number(input[2]);
    let hoursSpend = pages / perHour;
    let timePerDay = hoursSpend / daysNeeded;

    
    
    console.log(timePerDay);
    
}