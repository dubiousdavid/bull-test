let Bluebird = require('bluebird')

module.exports = async job => {
  console.log(job.data)
  await Bluebird.delay(100)
  return `Hello, ${job.data.name}`
}
