const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Numbers must be positive");
            }
            resolve(a+b);
        }, 2000)
    })
}

const doWork = async () => {
    const sum1 = await add(-1, 3);
    const sum2 = await add(sum1, 5);
    const sum3 = await add(sum2, 50);
    return sum3;
}

console.log(doWork()); // Javascript implicitly returns undefined

doWork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log('e', e);
})






/*
Notes:
Async functions always return a promise

*/