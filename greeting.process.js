let Bluebird = require('bluebird')

module.exports = async job => {
  job.log(`Greeting: ${job.data.name}`)
  await Bluebird.delay(job.data.name === 'Bob' ? 1000 : 100)
  return `Hello, ${job.data.name}`
}
