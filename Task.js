//problem1
const numbersArray = ['apple', 'orange', 'peach'];
console.log(numbersArray[0]);
console.log(numbersArray[2]);

const person = {
    name: 'abcde',
    age: 10,
    gender: 'M'
};
console.log(person.name);
console.log(person.age);

//problem2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log([...array1, ...array2]);


const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'M'
};
const educationDetails = {
    degree: 'xyz',
    college: 'anc'
};
console.log({...basicDetails, ...educationDetails });

//problem3
const numArray = [1, 5, 7, 9];

function largestNumber(numArray) {
    let max = 0;
    numArray.forEach(number => { max = number > max ? number : max; })
    console.log(max);

}

largestNumber(numArray);

const numArray1 = [-1, -5, 0, -100];

function largestNumber(numArray1) {
    let max = 0;
    numArray1.forEach(number => { max = number > max ? number : max; })
    console.log(max);

}

largestNumber(numArray1);

//problem4

function updateSalaries(employeesArray, percent) {

    const updated_employee_array = employeesArray.map(salary => salary + salary * (percent / 100));
    return updated_employee_array

}

console.log(updateSalaries([100, 500, 700, 400], 10))