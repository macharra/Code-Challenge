//input output interface is created
const { stdin, stdout } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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


//getting the input
function getInput() {

    //prompts the user to enter their marks
    rl.question("Enter your marks between 0 and 100: ", (input) => {
        marks = parseFloat(input.trim());

        //validates user input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log('Please enter a number between 0 and 100.');

            getInput(); // repeats the process if input is invalid

        //if input is valid, calls the get grade function 
        } else {
            let grade = getGrade(marks);
            console.log(`Marks: ${marks}  Grade: ${grade}`);
            rl.close();
        }
    });
}


getInput();
