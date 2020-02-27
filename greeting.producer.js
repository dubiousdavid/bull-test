let Queue = require('bull')
let options = require('./defaultOptions')

let queue = new Queue('Greeting', options)

setTimeout(() => {
  queue.add({ name: 'Bob' })
  queue.add({ name: 'Joe' })
  queue.add({ name: 'Frank' })
  // Repeat every minute, up to 10 times
  queue.add({ name: 'Sunshine' }, { repeat: { cron: '* * * * *', limit: 10 } })
  // Repeat every second, up to 50 times, starting 2/20/2020, and ending on 2/20/2021
  queue.add(
    { name: 'World' },
    {
      repeat: {
        startDate: new Date('2020-02-20'),
        endDate: new Date('2021-02-20'),
        every: 1000,
        limit: 50,
      },
    },
  )
}, 500)
