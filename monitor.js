let app = require('express')()
let { setQueues, UI } = require('bull-board')

let Queue = require('bull')
let plus2 = new Queue('Plus2')
let greeting = new Queue('Greeting')
let mail = new Queue('Mail')

// Monitor these queus
setQueues([plus2, greeting, mail])

let port = 3000
app.use('/monitor', UI)
app.listen(port, () => console.log(`Bull board listening on port ${port}!`))
