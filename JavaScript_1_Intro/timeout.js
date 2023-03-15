setTimeout(() => {
    console.log('Timed out!');
}, 0);

Promise.resolve(1).then(() => {
    console.log('Resolved!');
});