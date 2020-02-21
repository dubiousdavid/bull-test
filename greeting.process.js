let Bluebird = require('bluebird')

module.exports = async job => {
  console.log(job.data)
  await Bluebird.delay(job.data.name === 'Bob' ? 1000 : 100)
  return `Hello, ${job.data.name}`
}
