//problem1

function findFreq(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count =count + 1;
        }
    }


    return count;

}
console.log(findFreq("How many times does the character occur in the sentence?", 'm'));
console.log(findFreq("how many times does the character occur in the sentence?", 'h'));

//problem2


function areAllEqual(arr) {

    var first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (first !== arr[i]) {
            return false;
        }
    }


    return true;

}
console.log(areAllEqual([1, 1, 1, 2]));
console.log(areAllEqual(['test', 'test', 'test']));

//problem 3

function subArray(arr, n) {
    const array1 = arr.splice(-n);
    return array1;
}
console.log(subArray([1, 2, 3, 4, 5], 2));
console.log(subArray([1, 2, 3], 6));