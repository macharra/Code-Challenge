//Getting the grade
function getGrade (marks) {
    
    if (marks >= 80) {
        return 'A';
    } else if (marks >= 60 && marks < 80) {
        return 'B';
    } else if (marks >= 49 && marks < 60) {
        return 'C';
    } else if (marks >= 40 && marks < 50) {
        return 'D';
    } else {
        return 'E';
    }
}

//Getting input and executing
function getInput () {

    //gets input without any spaces
    marks = parseFloat(prompt("Enter your marks between 0 and 100: ").trim());
    
    //validates user input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert('Please enter a number between 0 and 100.');

        //if input is valid, calls the get grade function 
    } else {
        let grade = getGrade(marks);
        alert(`Marks: ${marks}  Grade: ${grade}`);
    }
}

getInput();
