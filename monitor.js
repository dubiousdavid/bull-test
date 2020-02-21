let app = require('express')()
let { setQueues, UI } = require('bull-board')
let plus2 = require('./plus2')
let greeting = require('./greeting')

// Monitor these queus
setQueues([plus2, greeting])

let port = 3000
app.use('/monitor', UI)
app.listen(port, () => console.log(`Bull board listening on port ${port}!`))
