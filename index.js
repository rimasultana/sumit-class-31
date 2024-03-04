// const roll_numbers = [3, 4, 7, 56, 30, 1];

// console.log(roll_numbers.sort(function(a, b) {
//     return a - b;
// }));

// Leap year

function isLeapYear (year){
    if((year % 400 === 0) || (year % 4 === 0 ) && (year % 100 !== 0)) {
        console.log(`${year} is a leap year`);
    } else {
     console.log(`${year} is not leap year`);
 }
}


isLeapYear(2026);