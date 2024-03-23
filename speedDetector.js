let points = 0;

function getPoints (speed) {
    
    if (speed <= 70) {
        return 'Ok';
        
    }

    //One point is added for every 5km/h above speed limit 
    else if (speed > 70 && speed <= 130) {
        points = Math.floor((speed - 70)/5);
        return `Points: ${points}`;
    } 
    //license is suspended when speed is more than 135km/h (above 12 points)
    else {
        return "License suspended!";
    }
}

function getInput () {
    let speed = 0;
    do {
        //gets and validates user input
        let input = prompt("Enter the speed in km/hr: ").trim();
        speed = parseInt(input);

        //Alerts the user when input is invalid
        if (isNaN(speed) || speed < 0) {
            alert('Invalid. Please enter the speed in numbers.');
        }

    } while(isNaN(speed) || speed < 0)

    //calls the get points function
    let results = getPoints(speed);
    alert(results);

}

getInput();

