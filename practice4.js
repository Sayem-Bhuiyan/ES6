/*
    Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Combine the two array and assign them to a new array
    c) find the maximum number of the new array and return the result
*/ 

const numbers1 = [4, 32, 54, 50];
const numbers2 = [65, 98, 34, 23];

const findMax = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    const max = Math.max(...newArr);
    return max;
}

const maxIs = findMax(numbers1, numbers2);
console.log(maxIs);