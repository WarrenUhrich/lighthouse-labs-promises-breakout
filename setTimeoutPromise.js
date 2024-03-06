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

module.exports = setTimeoutPromise;
