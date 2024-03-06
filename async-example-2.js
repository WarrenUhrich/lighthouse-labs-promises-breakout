console.log('1. Start of program.');

setTimeout(() => { // Scheduled for later!
    console.log('2. 2000ms timeout.');

    setTimeout(() => { // Scheduled for later!
        console.log('3. 200ms timeout.');

        setTimeout(() => { // Scheduled for later!
            console.log('4. 3000ms timeout.');
        }, 3000);

    }, 200);

}, 2000);

console.log('5. End of program.');

// OLD: 1, 5, 3, 2, 4
// NEW: 1, 5, 2, 3, 4
