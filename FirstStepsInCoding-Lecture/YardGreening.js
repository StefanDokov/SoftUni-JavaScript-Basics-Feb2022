function cash(input) {
    
    const mdouble = 7.61;
    let kvm = Number(input[0]);
    let discount = Number(18 / 100);
    let kvmTwo = kvm * mdouble;
    let disTwo = kvmTwo * discount;
    let sum = kvmTwo - disTwo;
    
    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${disTwo} lv.`)
}