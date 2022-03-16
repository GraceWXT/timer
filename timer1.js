// beep sound: process.stdout.write('\x07');

// //requirement
// No numbers are provided: It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// let input = process.argv.slice(2).map((element) => {
//   if (Number(element) !== NaN && Number(element) > 0) {
//     return Number(element);
//   }}).filter((element => element !== undefined));

let input = process.argv.slice(2)
  .filter(element => !isNaN(Number(element)) && Number(element) > 0)
  .map(element => Number(element));
// console.log(input);
const timer = (input) => {
  for (let number of input) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  }
};

timer(input);