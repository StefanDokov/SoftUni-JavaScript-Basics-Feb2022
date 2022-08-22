function deposit(input) {
    
    
    let money = Number(input[0]);
    let timeSpend = Number(input[1]);
    let yearProf = Number(input[2]);
    let value = money * (yearProf / 100);
    let monthPay = value / 12;
    let sum = money + timeSpend * monthPay;
    
    
    console.log(sum);
    
}