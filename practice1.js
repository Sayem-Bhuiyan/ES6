// write an arrow function take three parameters and multiply them and return the result
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(5, 3, 3);
console.log(result);

// 2: wrtie the following sentence in three lines and print the result
// I am a Developer. I love to code. I love to eat biriany.

const sentence = `
    I am a Developer.
    I love to Code.
    I love to eat Biriany.
`

console.log(sentence);

// 3: write an arrow function that will take 2 parameter. One parameter will come from you and 
// other will be default parameter. Add these two and return the result

const add = (num1, num2 = 0) => num1 + num2;
const sum = add(6);
console.log(sum);