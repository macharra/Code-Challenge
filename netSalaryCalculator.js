/* Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.  */
let basicSalary;
let benefits;
let grossSalary;
let netSalary;
let PAYE;
let NHIF;
let NSSF;

//Get the total gross salary
function getGrossSalary () {
    do {
        benefits = parseFloat(prompt('Enter your month\'s basic salary in Ksh: ').trim());
        basicSalary = parseFloat(prompt('Enter the month\'s benefits if any: ').trim());

        if (isNaN(benefits) || isNaN(basicSalary) || basicSalary <= 0 || benefits < 0) {
            alert('Invalid. Enter your month\'s basic salary(COMPULSORY) and benefits if any in Ksh.')
        }

    } while(isNaN(basicSalary) || isNaN(benefits) || basicSalary <= 0 || benefits < 0)

    return grossSalary = basicSalary + benefits;
}

//Get the value of PAYE
function getPAYE () {
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
function getNHIF () {

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
function getNSSF () {
    let nssf = (grossSalary * 0.06);
    return Math.floor(nssf);

}

//Call the declared functions
getGrossSalary();
PAYE = getPAYE();
NHIF = getNHIF();
NSSF = getNSSF();

//Get the net salary
function getNetSalary() {
  

    let totalTax = PAYE + NHIF + NSSF;
    netSalary = grossSalary - totalTax;

    alert(`PAYE: Ksh ${PAYE}   NHIF: Ksh ${NHIF}   NSSF: Ksh ${NSSF}\nGross salary: Ksh ${grossSalary}\nTotal tax: Ksh ${totalTax}\nNet salary: Ksh ${netSalary}`);
}

getNetSalary();

