function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const firstCounter = stopWatch();
console.log(firstCounter())
console.log(firstCounter())
console.log(firstCounter())