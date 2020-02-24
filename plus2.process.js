let Bluebird = require('bluebird')

module.exports = async job => {
  job.log(`Processing number: ${job.data.number}`)

  await Bluebird.delay(100)

  if (job.data.number === 13 && job.attemptsMade < 2)
    throw new Error('I do not like the number 13')

  return job.data.number + 2
}
