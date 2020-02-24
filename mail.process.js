let Bluebird = require('bluebird')
let _ = require('lodash/fp')

module.exports = async job => {
  job.log(`Processing record id: ${job.data.recordId}`)
  // Simulate retrieving a list of emails by record id
  await Bluebird.delay(1000)

  let emails = ['foo@bar.com', 'joe@example.com', 'a@b.com', 'c@d.com']
  let numEmails = emails.length

  return Bluebird.each(emails, async (email, index) => {
    // Simulate sending an email
    await Bluebird.delay(5000)
    let progress = _.floor(((index + 1) / numEmails) * 100)
    console.log('Progress', progress);
    job.progress(progress)
  })
}
