//Create an unterface for input and output
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let netSalary, PAYE, NHIF, NSSF



// Asynchronous function to calculate gross salary
async function getGrossSalary () {
    let inputInvalid = true;
    let basicSalary, benefits, grossSalary;

      // Loop until valid input is received
    while (inputInvalid) {
        
        //prompt user for basic salary and benefits
        let inputSalary = await new Promise(resolve => {
            rl.question('Enter your month\'s basic salary in Ksh: ', resolve);
        });
        let inputBenefits = await new Promise(resolve => {
            rl.question('Enter the month\'s benefits if any: ', resolve);
        });

        basicSalary = parseFloat(inputSalary.trim());
        benefits = parseFloat(inputBenefits.trim());
        
        //check if input is valid
        if (isNaN(basicSalary) || isNaN(benefits) || basicSalary <= 0 || benefits < 0) {
            console.log('Invalid input. Please enter valid numbers for basic salary and benefits.');
        
        } else {
            inputInvalid = false;
            grossSalary = basicSalary + benefits;
        }
    }
    rl.close();
    return grossSalary;

}


//Get the value of PAYE
function getPAYE (grossSalary) {
    let paye;
    if (grossSalary <= 24000) {
        paye = (grossSalary * 0.1);

    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        paye = (grossSalary * 0.25);

    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        paye = (grossSalary * 0.3);

    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        paye = (grossSalary * 0.325);

    } else {
        paye = (grossSalary * 0.35);
    }

    return Math.floor(paye);

}

//Get the value of NHIF
function getNHIF (grossSalary) {

    let nhif;

    if (grossSalary < 6000) {
        nhif = 150;
    } else if (grossSalary < 8000) {
        nhif = 300;
    } else if (grossSalary < 12000) {
        nhif = 400;
    } else if (grossSalary < 15000) {
        nhif = 500;
    } else if (grossSalary < 20000) {
        nhif = 600;
    } else if (grossSalary < 25000) {
        nhif = 750;
    } else if (grossSalary < 30000) {
        nhif = 850;
    } else if (grossSalary < 35000) {
        nhif = 900;
    } else if (grossSalary < 40000) {
        nhif = 950;
    } else if (grossSalary < 45000) {
        nhif = 1000;
    } else if (grossSalary < 50000) {
        nhif = 1100;
    } else if (grossSalary < 60000) {
        nhif = 1200;
    } else if (grossSalary < 70000) {
        nhif = 1300;
    } else if (grossSalary < 80000) {
        nhif = 1400;
    } else if (grossSalary < 90000) {
        nhif = 1500;
    } else if (grossSalary < 100000) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return Math.floor(nhif)
}

//Get the value of NSSF
function getNSSF (grossSalary) {
    let nssf = (grossSalary * 0.06);
    return Math.floor(nssf);

}


//Get the net salary
function getNetSalary(grossSalary, PAYE, NHIF, NSSF) {
  

    let totalTax = PAYE + NHIF + NSSF;
    netSalary = grossSalary - totalTax;

    console.log(`PAYE: Ksh ${PAYE}   NHIF: Ksh ${NHIF}   NSSF: Ksh ${NSSF}\nGross salary: Ksh ${grossSalary}\nTotal tax: Ksh ${totalTax}\nNet salary: Ksh ${netSalary}`);
}


// Asynchronous self-invoking function to calculate and display net salary
(async () => {
    let grossSalary = await getGrossSalary();
    let PAYE = getPAYE(grossSalary);
    let NHIF = getNHIF(grossSalary);
    let NSSF = getNSSF(grossSalary);
    getNetSalary(grossSalary, PAYE, NHIF, NSSF);
})();

