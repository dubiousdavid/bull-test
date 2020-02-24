let Queue = require('bull')
let options = require('./defaultOptions')

let queue = new Queue('Plus2', options)

// Concurrency: 2
// Two workers will run in their own Node process
queue.process(2, `${__dirname}/plus2.process.js`)

queue.on('completed', function(job, result) {
  console.log(`${job.data.number} + 2 = ${result}`)
})

queue.on('failed', function(job, error) {
  console.log('Attempts Made:', job.attemptsMade)
  console.error(error)
})
