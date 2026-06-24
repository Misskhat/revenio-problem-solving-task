// Problem: 1
// Prime Number Check: Given a number 29, explain how you would determine whether it is a prime number or not. Input: 29 Output: Prime Number

const number = 29;
const number2 = 18;
const number3 = 16;
const number4 = 32;
const number5 = 100;

function primeNumberChecker(n) {
  if (n % n === 0 && n % 2 !== 0) {
    console.log("Prime  Number.");
  } else {
    console.log("Not Prime Number.");
  }
}
