let Queue = require('bull')

let queue = new Queue('Mail')

setTimeout(() => {
  let id = 123
  for (let i = 0; i < 50; i++) {
    queue.add({ recordId: id++ })
  }
}, 500)
