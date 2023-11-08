/*
Filename: advanced_data_processing.js

This code demonstrates advanced data processing techniques in JavaScript. It includes complex algorithms, recursion, and a variety of functions to analyze and manipulate data.

*/

// Generate an array of numbers from 1 to n
function generateArray(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// Function to calculate the sum of an array of numbers
function calculateSum(arr) {
  return arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
}

// Function to calculate the factorial of a number using recursion
function calculateFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Function to find the maximum value in an array
function findMax(arr) {
  return Math.max(...arr);
}

// Function to filter even numbers from an array
function filterEvenNumbers(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}

// Function to map an array to double its values
function mapDouble(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

// Function to sort an array in ascending order
function sortAscending(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Generate an array of numbers from 1 to 100
const numbers = generateArray(100);

// Calculate the sum of numbers from 1 to 100
const sum = calculateSum(numbers);

// Calculate the factorial of 10
const factorial = calculateFactorial(10);

// Find the maximum value in the numbers array
const max = findMax(numbers);

// Filter even numbers from the numbers array
const evenNumbers = filterEvenNumbers(numbers);

// Double the values of the numbers array
const doubledNumbers = mapDouble(numbers);

// Sort the numbers array in ascending order
const sortedNumbers = sortAscending(numbers);

// Reverse a string
const reversedString = reverseString("Hello, World!");

// Output the results
console.log("Sum:", sum);
console.log("Factorial:", factorial);
console.log("Max:", max);
console.log("Even Numbers:", evenNumbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("Sorted Numbers:", sortedNumbers);
console.log("Reversed String:", reversedString);
