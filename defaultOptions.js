module.exports = {
  // Max 30 jobs per second
  limiter: {
    max: 30,
    duration: 1000,
  },
  defaultJobOptions: {
    backoff: {
      type: 'fixed',
      delay: 1000,
    },
    // Attempt up to 2 times.
    attempts: 2,
    // Timeout the job after 500ms
    timeout: 500,
    // Number of completed jobs to keep
    // removeOnComplete: 500,
    // Number of failed jobs to keep
    // removeOnFail: 500
  },
}
