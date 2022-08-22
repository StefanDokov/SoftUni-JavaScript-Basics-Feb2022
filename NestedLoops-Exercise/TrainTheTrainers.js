function bonus(input) {
    let index = 0;
    let  n = Number(input[index]);
    index++;
    let nameTask = input[index];
    index++;
    let countGrades = 0;
    let averGrades = 0;
    
    while (nameTask !== "Finish") {
       countGrades++;
       let presentation = nameTask;
       let tempAverGrade = 0;
       for (let i = 0; i < n; i++){
       let tempGrade = Number(input[index]);
       index++;
       tempAverGrade += tempGrade;
    }
    tempAverGrade = tempAverGrade / n;
    let presentResult = `${presentation} - ${tempAverGrade.toFixed(2)}.`;
    console.log(presentResult);
    averGrades += tempAverGrade;
    nameTask = input[index];
    index++;
  
  }
 averGrades = averGrades / countGrades;
 console.log(`Student's final assessment is ${averGrades.toFixed(2)}.`);
}