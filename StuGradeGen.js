
     let mark =prompt("Enter Students' mark between 0 and 100:  ");//prompts user to enter grade
     mark = parseFloat(mark);//returns NaN if value is not between 0 and 100 e.g hello 
     
     function studentGrade(){

     if(isNaN(mark)|| mark<0 || mark>100)//checks if what is entered is a valid number and within the valid range(0-100)
     {
         return "You entered an invalid mark,Please enter a number between 0 and 100"//the output when value isn't between 0 and 100
 
     }
   else if (mark > 79) {//if the mark is above 79 the grade is an A
     return "A";
   } 
   else if (mark >= 60 && mark <= 79) {
     return "B";
   } 
   else if (mark >= 50 && mark<= 59) {
     return "C";
   } 
   else if (mark >= 40 && mark <= 49) {
     return "D";
   } 
   else {
     return "E";//if the mark is below 40 the grade is an E
   }
  
 }
 console.log(`The grade is: ${studentGrade()}`);//(use of string interpolation)calls the function,studentGrade, and prints the returned grade in the string






 
 /*function studentGrade()
{
    let mark =prompt("Enter Students grades between 0 and 100:  ");//prompts user to enter grade
   mark = parseFloat(mark);
    

    if(isNaN(mark)|| mark<0 || mark>100)//checks if what is entered is a number,should not be greater than 100 
    {
        return "You entered an invalid grade,Please enter a number between 0 and 100"

    }
  else if (mark > 79) {
    return "A";
  } 
  else if (mark >= 60 && mark <= 79) {
    return "B";
  } 
  else if (mark >= 50 && mark <= 59) {
    return "C";
  } 
  else if (mark>= 40 && mark <= 49) {
    return "D";
  } 
  else {
    return "E";
  }
 
}
console.log(studentGrade()) */



/*function getStudentGrade() {
    
    let marks = parseFloat(prompt("Enter student marks (0-100):"));
    
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }
    
    // Determine the grade
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    
    alert(`The grade is: ${grade}`);// Output the grade
}


getStudentGrade();
 */