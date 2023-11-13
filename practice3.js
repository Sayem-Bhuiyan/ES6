/*
    Write an arrow function where it will do the following:
    a) Square each array elements
    b) calculate the sum of the square elements
    c) return the avarage of the sum of the squared elements
*/ 


const numbers = [43, 32, 53, 23, 64, 34, 64];
const avarage = arr => {
    let sumOfSquare = 0;
    for(const each of arr){
        const square = each * 2;
        sumOfSquare = sumOfSquare + square;
    }
    const avg = sumOfSquare / arr.length;
    const avgTwoDecimal = avg.toFixed(2)
    return parseFloat(avgTwoDecimal);
}

const avg = avarage(numbers);
console.log(avg);