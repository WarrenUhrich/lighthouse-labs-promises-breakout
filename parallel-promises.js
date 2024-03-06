const setTimeoutPromise = require('./setTimeoutPromise');

const arrOfPromises = [
    setTimeoutPromise(() => {
        console.log('timeout 1');
        return 'timeout 1';
    }, 80),
    setTimeoutPromise(() => {
        console.log('timeout 2');
        return 'timeout 2';
    }, 5000),
    setTimeoutPromise(() => {
        console.log('timeout 3');
        return 'timeout 3';
    }, 1000),
    setTimeoutPromise(() => {
        console.log('timeout 4');
        return 'timeout 4';
    }, 1500),
    setTimeoutPromise(() => {
        console.log('timeout 5');
        return 'timeout 5';
    }, 2000),
];

Promise
    .all(arrOfPromises)  // On this line we have an array of 5 pending promises.
    .then((arrOfResults) => {
        console.log('Done ALL! Here are the results:', arrOfResults);
    });

Promise
    .race(arrOfPromises)  // On this line we have an array of 5 pending promises.
    .then((result) => {   // Once ANY promise completes we trigger the .then()!
        console.log('Done RACE! Here are the results:', result);
    });
