const recordVideoOne = new Promise((resolve, reject) => {
	resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
	resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
	resolve('Video 3 Recorded')
})

// They wait all of them to finish
Promise.all([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
]).then(messages => {
	console.log(messages)
})


// Run at the same order
Promise.race([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
]).then(message => {
	console.log(message)
})