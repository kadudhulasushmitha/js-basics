/*
//Swapping of two numbers
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

let temp;
temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//swapping using destructuring method

let a =  prompt('Enter the first variable: ');
let b =  prompt('Enter the second variable: ');

[a, b] = [b, a];

console.log(a);
console.log(b);

//using Arithmetic Operations
let a = parseInt(prompt('Enter the first variables: '));
let b = parseInt(prompt('Enter the second variable: '));

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);


//COnverting kilometer to miles

const kilometers = prompt("Enter value in kilometers: ")

const factor = 0.621

const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);



//Append an object to array

function insertObject(arr, obj) {
    arr.push(obj);

    console.log(arr);
}
//Original object
let array = [1, 2, 3];

//Object to add
let object = { x: 2, y: 4};

insertObject(array, object);


//Remove Duplicate

function getUnique(arr){
    let uniqueArr = [];

    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1){
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 4, 5, 3, 3];

getUnique(array);

// To check if the string is palindrome or not

function checkPalindrome(str) {

    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);

//  reverse a string

function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);


//  simple calculator

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

const operator = prompt('Enter operator ( either +, -, * or / ): ');


let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  */

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
