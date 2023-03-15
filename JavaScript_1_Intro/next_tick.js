// let bar;

// // this has an asynchronous signature, but calls callback synchronously
// async function someAsyncApiCall(callback) {
//     callback();
// }

// // the callback is called before `someAsyncApiCall` completes.
// someAsyncApiCall(() => {
//     // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
//     console.log('bar', bar); // undefined
// });

// bar = 1;

// ------------------------------------------------------------------

let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

setTimeout(() => {
    console.log('Timed out!');
}, 0);

bar = 1;

// Tick and micro tasks are triggered before timer. https://www.voidcanvas.com/nodejs-event-loop