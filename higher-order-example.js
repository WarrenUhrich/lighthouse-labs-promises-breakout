/**
 * Higher Order Function?
 * -> A function that follows at least one of two rules:
 * 1. take in a function!
 * 2. returns a function!
 * 
 * Callback Function
 * -> A function we pass into another.
 */

console.log('1. Beginning of program.');

const higherOrderFunction = (callback) => {
    console.log('2. Beginning of higherOrderFunction().');

    callback('Hello from higher order!');

    console.log('3. End of higherOrderFunction().');
};

console.log('4. Before running higherOrderFunction().');
higherOrderFunction((text) => {
    console.log('5. Inside the callback; text says:', text);
});
console.log('6. After running higherOrderFunction().');

console.log('7. End of our program.');

// 1, 4, 2, 5, 3, 6, 7
