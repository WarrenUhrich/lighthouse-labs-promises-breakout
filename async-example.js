console.log('1. Start of program.');

setTimeout(() => { // Scheduled for later!
    console.log('2. 2000ms timeout.');
}, 2000);

setTimeout(() => { // Scheduled for later!
    console.log('3. 200ms timeout.');
}, 200);

setTimeout(() => { // Scheduled for later!
    console.log('4. 3000ms timeout.');
}, 3000);

console.log('5. End of program.');

// 1, 5, 3, 2, 4
