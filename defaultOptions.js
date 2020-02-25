module.exports = {
  // These options need to be present when initializing the consumer side of the queue
  limiter: {
    // Max jobs per second
    max: 5,
    duration: 1000,
  },
  // These options need to be present when initializing the producer side of the queue
  defaultJobOptions: {
    // Attempt up to 2 times.
    attempts: 2,
    // Timeout the job after 500ms
    timeout: 500,
    // Number of completed jobs to keep
    // removeOnComplete: 50,
    // Number of failed jobs to keep
    // removeOnFail: 5
  },
}
