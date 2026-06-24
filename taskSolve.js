// Problem: 1
// Prime Number Check: Given a number 29, explain how you would determine whether it is a prime number or not. Input: 29 Output: Prime Number

function primeNumberChecker(n) {
  //n is a number or not vValidation check
  if (n !== "number") console.log("Please provide a number");

  //prime number logic:
  if (n % n === 0 && n % 2 !== 0) {
    console.log("Prime  Number.");
  } else {
    console.log("Not Prime Number.");
  }
}

// Problem: 2
// Find Largest Element in Array: Given an array [12, 45, 7, 89, 23], explain how you would find the largest element efficiently. Input: [12, 45, 7, 89, 23] Output: 89

function largeElementInArray(arr) {
  //is it array or not validation check.
  if (!Array.isArray(arr)) {
    console.log("Please provide the array");
    return;
  }

  //array all elements are numbers or not validation check.
  const isArrayValid = arr.every((i) => typeof i === "number" && !isNaN(i));
  if (!isArrayValid) {
    console.log("Please provide a full number's array");
    return;
  }

  //large element logic:
  let largeNumber = 0;
  for (const n of arr) {
    if (n > largeNumber) {
      largeNumber = n;
    }
  }
  console.log(largeNumber);
}
