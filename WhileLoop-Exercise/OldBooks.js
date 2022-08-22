function bonus(input) {
    
    let index = 0;
    let name = input[index++];
    let two = input[index++];
    
    
    
    let aver = 0;
    let start = 0;
    

    
    
    
    isntHere = true;
    while(two != "No More Books") {
        let bookshelf = two;
        
        
        if (bookshelf === name) {
            console.log(`You checked ${start} books and found it.`)
            isntHere = false;
            break;
        }
       
            start += 1;
            two = input[index++];
        
        
    }
    if (isntHere) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${start} books.`);
    }
}