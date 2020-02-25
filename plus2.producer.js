let Queue = require('bull')
let options = require('./defaultOptions')

let queue = new Queue('Plus2', options)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

setTimeout(() => {
  queue.add({ number: 13 })

  for (let i = 0; i < 100; i++) {
    queue.add({ number: getRandomInt(1000) })
  }
}, 500)

