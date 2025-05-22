
const range = (start: number, stop: number, step: number) => {
    return Array.from(
        {
        length: Math.ceil((stop - start)/ step),
    }, (v, i) => start + i*step)
}

const range_col = (start: number, stop: number, step: number) => {
    const array: Array<number> = [];
    do {
        array.push(start);
        start += step;
    } while (start < stop);

    return array;
}


// console.log(range(1, 5, 1))
// console.log(range_col(1, 5, 1))

// Array.fromAsync() static method

// Array.fromAsync([1, 2, 3]).then(result => console.log(result));

const fx = (async function* () {
    for (let i=0; i<5; i++){
        await new Promise((resolve) => setTimeout(resolve, 10*i))

        yield i;

    }

})();


(async () => {
    // await console.log(fx)
})();

// Array.fromAsync(fx).then((array) => console.log(array));


// Check if one array is a subset of another array

const issubset = (arr1: number[], arr2: number[]) =>{
    return arr1.every((element: number) => arr2.includes(element))
}

console.log(issubset([1,2,3], [1,2,3,4,5]))

const tempGirls = Array(5).fill("girl", 0);

console.log(tempGirls)
