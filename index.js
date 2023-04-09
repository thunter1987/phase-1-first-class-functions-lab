// Code your solution in this file
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0,2);

const returnLastTwoDrivers = () => drivers.slice(-2);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
    return function fareMultiplier(num2) {
        return num1*num2
    }
}


function fareDoubler(num2) {
return num2 * 2
}

function fareTripler(num2) {
    return num2 * 3
}
fareTripler(4);

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}