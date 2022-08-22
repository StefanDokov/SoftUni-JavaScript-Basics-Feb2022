function movie(input) {
    
    let obem = Number(input[0]);
    let pOne = Number(input[1]);
    let pTwo = Number(input[2]);
    let hash = Number(input[3]);
    
    let trubaOne = pOne * hash;
    let trubaTwo = pTwo * hash;
    let litri = trubaOne + trubaTwo;
    let pulno = (100 * litri) / obem;
    let kolkoPone = (100 * trubaOne) / litri;
    let kolkoPtwo = (100 * trubaTwo) / litri;
    let omgThree = Math.abs(obem - litri);

    if (litri <= obem) {
        console.log(`The pool is ${pulno.toFixed(2)}% full. Pipe 1: ${kolkoPone.toFixed(2)}%. Pipe 2: ${kolkoPtwo.toFixed(2)}%.`)
    }
    else {
        console.log(`For ${hash.toFixed(2)} hours the pool overflows with ${omgThree.toFixed(2)} liters.`)
    }


    }