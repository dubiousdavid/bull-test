let Queue = require('bull')
let options = require('./defaultOptions')

let queue = new Queue('Greeting', options)

// Concurrency: 1
// Runs in it's own process to isolate from other job handlers
queue.process(1, `${__dirname}/greeting.process.js`)

queue.on('completed', function(job, result) {
  console.log(result)
})
