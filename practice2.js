/*
    Write an arrow function where it will do the following:
    1. It will take an array where the element will be the name of yours friends name
    2. Checked if the length of each element is even, push element with even length to
        a new array and return the result.
*/ 

const names = ['Sayem', 'Akash', 'Shajib', 'Tipu', 'Siam', 'Fahim'];
const checkEven = names => {
    const evenName = [];
    for(const name of names){
        if(name.length % 2 === 0){
            evenName.push(name);
        }
    }
    return evenName;
}

const evenNames = checkEven(names);
console.log(evenNames);