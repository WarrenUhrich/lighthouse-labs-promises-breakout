/**
 * What is a promise?
 * -> A promise is a guarantee that something in the future will happen.
 *      * Promise is an object that exists in 3 potential states:
 *          1. <Pending>
 *          2. <Resolved>
 *          3. <Rejected>
 * -> Can be easier to manage than callbacks! (hopefully avoid things like "callback hell")
 */

/**
 * I want to convert our setTimeout to be a promise.
 */

const setTimeoutPromise = (callback, timeInMs, forceReject=false) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(forceReject) {
                return reject('Error: encountered. Unable to run setTimeoutPromise().');
            }

            const result = callback();
            resolve(result);
        }, timeInMs);

    });

};

const myTimeoutPromise = setTimeoutPromise(() => {
    console.log('2s Timeout Complete!');
    return 'Hello from 2s!';
}, 2000, true)
.then(message => {
    console.log('Timer is done! Our resolve message was:', message);
})
.catch(errorMessage => {
    console.log('CATCH ERROR!', errorMessage);
});

// What will we see here?
console.log('myTimeoutPromise:', myTimeoutPromise);
