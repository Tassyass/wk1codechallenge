//this code is to calcualte the student grades
let grade = 65;
let user = "Tass" 
let grading;
function calculateStudentGrade(){
      if (grade > 79 && grade < 100) {
        return `A`;
      } else if (grade >= 60 && grade <= 79) {
        return `B`;
      } else if (grade >= 50 && grade <= 59) {
        return `C`;
      } else if (grade >= 40 && grade <= 49) {
        return `D`;
      } else  if (grade <40) {
        return `E`;
      }
      return grade;
   
}
   grading = calculateStudentGrade ()
   console.log (`Hello ${user}, your grade is ${grading}`)  
