// const roll_numbers = [3, 4, 7, 56, 30, 1];

// console.log(roll_numbers.sort(function(a, b) {
//     return a - b;
// }));

// Leap year

// function isLeapYear (year){
//     if((year % 400 === 0) || (year % 4 === 0 ) && (year % 100 !== 0)) {
//         console.log(`${year} is a leap year`);
//     } else {
//      console.log(`${year} is not leap year`);
//  }
// }


// isLeapYear(2026);




// const vowles = ["a","b","d","u","g","o","u"];

// function countVowels (sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach(function(value,index,array){
//         if(value.includes(value)){
//             count++;
//         }
//     });
//     return count;
    
// }


// console.log(countVowels("I Love Bangladesh"));

// Array thake Duplicates number bar korar niyom

const numbers = [1,3,2,5,5,9,6,6,7,0];

const duplicates = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index
});

console.log(duplicates);