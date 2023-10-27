/* 
Filename: ComplexCode.js
Description: A complex and elaborate JavaScript code demonstrating advanced concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of random numbers
const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}

// Function to find the maximum number in an array
function findMaxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Find the maximum number in the randomNumbers array
const maxNumber = findMaxNumber(randomNumbers);
console.log(`The maximum number in the array is: ${maxNumber}`);

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Calculate the factorial of 10
const factorialResult = factorial(10);
console.log(`The factorial of 10 is: ${factorialResult}`);

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Reverse a sample string
const reversedString = reverseString('Hello World');
console.log(`The reversed string is: ${reversedString}`);

// Class representing a car
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`Driving ${this.brand} ${this.model}...`);
  }
}

// Create an instance of Car
const myCar = new Car('Tesla', 'Model S');
myCar.drive();

// Promises example
const wait = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

wait(2000)
  .then(() => {
    console.log('Waited for 2 seconds');
  })
  .catch((error) => {
    console.error('Error occurred while waiting:', error);
  });

// Fetch data from an API
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('Error occurred while fetching data:', error);
  });

// Complex code logic and calculations...
// ...
// ...

// We invoke some complex functions or methods here...

// Main function to start the program
function main() {
  const person = new Person('John Doe', 30);
  person.greet();
  
  // More complex code...
  // ...
}

// Start the program
main();