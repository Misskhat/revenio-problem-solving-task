// Problem: 1
// Prime Number Check: Given a number 29, explain how you would determine whether it is a prime number or not. Input: 29 Output: Prime Number

const e = require("cors");

function primeNumberChecker(n) {
  //n is a number or not vValidation check
  if (typeof n !== "number") {
    console.log("Please provide a number");
    return;
  }

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

// Problem: 3
// Reverse a String: Given the string "algorithm", explain how you would reverse it without using built-in reverse functions. Input: "algorithm" Output: "mhtirogla"

function reverseString(str) {
  if (typeof str !== "string") {
    console.log("Please provide a string");
    return;
  }

  //reverse string logic:
  let result = "";
  for (const s of str) {
    result = s + result;
  }
  console.log(result);
}

// Problem: 4
// Palindrome Check: Given the string "madam", explain how you would check whether it is a palindrome. Input: "madam" Output: Palindrome

function palindromeCheck(str) {
  //validation check.
  if (typeof str !== "string") {
    console.log("Please provide the string word.");
    return;
  }

  //palindrome string logic.
  const strLowerCase = str.toLowerCase();
  const reverseStrLowerCase = strLowerCase.split("").reverse().join("");
  if (strLowerCase === reverseStrLowerCase) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}

// Problem: 5
// Factorial Calculation: Given a number 5, explain how you would calculate its factorial. Input: 5 Output: 120
function factorialCalculation(number) {
  //validation check
  if (typeof number !== "number") {
    console.log("Please provide the number");
    return;
  }

  //factorial calculation logic:
  let factor = 1;
  for (let i = 1; i <= number; i++) {
    factor = factor * i;
  }
  console.log(factor);
}

//Problem: 6
// Find Duplicate Elements: Given an array [1, 3, 5, 3, 7, 1], explain how you would identify duplicate elements. Input: [1, 3, 5, 3, 7, 1] Output: [1, 3]

function findDuplicateElements(arr) {
  //validation check
  if (!Array.isArray(arr)) {
    console.log("Please provide an array");
    return;
  }

  //duplicate elements found logic.
  const duplicateArray = [];
  const uniqArray = [];
  for (const element of arr) {
    if (!uniqArray.includes(element)) {
      uniqArray.push(element);
    } else {
      duplicateArray.push(element);
    }
  }
  console.log(duplicateArray);
}

// Problem: 7
// Swap Two Numbers Without a Third Variable: Given two numbers, 10 and 20, explain how you would swap them without using another variable. Input: a = 10, b = 20, Output: a = 20, b = 10

function swapNumber(a, b) {
  [a, b] = [b, a];
  console.log(`a = ${a}, b = ${b}`);
}

// Problem: 8
// Count Vowels in a String: Given the string "Programming", explain how you would count the vowels. Input: "Programming" Output: 3

/**
 * step by step breakdown the logic of find out the vowel count.
 * 1. Create a function (I'will name the function vowelCount)
 * 2. Take a parameter in function params (as like "str")
 * 3. If you need validation then check the type check
 * 4. Assign 2 variable one for param lowercase and another for vowel included
 * 5. loop through the string and inside loop check the alphabet is it vowel or not
 * 6. if vowel then push the vowel included variable
 * 7. an after the loop end check the vowel array length and your get the result.
 */
function vowelCount(str) {
  //validation check
  if (typeof str !== "string") {
    console.log("Please provide a string value");
    return;
  }

  //vowel count logic:
  const strLowerCase = str.toLowerCase();
  let strCountVowel = [];
  for (const element of str) {
    // console.log(element);
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      strCountVowel.push(element);
    }
  }
  console.log(strCountVowel.length);
}
