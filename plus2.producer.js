let Queue = require('bull')

let queue = new Queue('Plus2')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

setTimeout(() => {
  queue.add({ number: 13 })

  for (let i = 0; i < 1000; i++) {
    queue.add({ number: getRandomInt(1000) })
  }
}, 500)

