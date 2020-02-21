let Queue = require('bull')
let options = require('./defaultOptions')

let queue = new Queue('Plus2', options)

// Concurrency: 2
// Runs in it's own process to isolate from other job handlers
queue.process(2, `${__dirname}/plus2.process.js`)

queue.on('completed', function(job, result) {
  console.log(`${job.data.number} + 2 = ${result}`)
})

queue.on('failed', function(job, error) {
  console.log('Attempts Made:', job.attemptsMade)
  console.error(error)
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

setTimeout(() => {
  for (let i = 0; i < 1000; i++) {
    queue.add({ number: getRandomInt(1000) })
  }
}, 500)

module.exports = queue
