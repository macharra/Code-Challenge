//Input and output interface is created
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let points = 0;
const speedLimit = 70;
const divider = 5;

function getPoints (speed) {
    
    if (speed <= speedLimit) {
        return 'Ok';
        
    }

    //One point is added for every 5km/h above speed limit 
    else if (speed > speedLimit && speed <= 130) {
        points = Math.floor((speed - speedLimit)/divider);
        return `Points: ${points}`;
    } 
    //license is suspended when speed is more than 135km/h (above 12 points)
    else {
        return "License suspended!";
    }
}

function getInput() {

    //prompt the user for input
    rl.question("Enter the speed in km/hr: ", (input) => {
        let speed = parseInt(input.trim());

        if (isNaN(speed) || speed < 0) {
            console.log('Invalid. Please enter the speed in numbers.');
            getInput(); // Restart the input process
        } else {
            let results = getPoints(speed);
            console.log(results);
            rl.close(); // Close the interface after processing input
        }
    });
}

















getInput();

