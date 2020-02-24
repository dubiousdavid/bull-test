## BullMQ Evaluation

### To Run

```bash
npm install
node monitor.js
node process.js
```

open http://localhost:3000/monitor

Fire off one or more producers:

```bash
node greeting.producer.js
node plus2.producer.js
node mail.producer.js
```

### Positives

- Simple API.
- Handles 1000s of requests with ease.
- Persists disconnection or Redis going down (assumes AOF is enabled for Redis).
- Rate-limiting (e.g. 100 jobs per second).
- Job repeating using cron expressions or every x ms. Also supports a start and end date.
- Max concurrency settings per queue.
- Utilization of multiple CPU cores. Each job handler can run in a separate Node.js process, isolating jobs from one another.
- Monitoring via bull-board (could be an admin interface) and bull-repl.
- Eliminates the need to use RabbitMQ for Spark.
- Jobs can be created within Spark (e.g., service after hook).
- 100k jobs only takes up around 30MB of memory in Redis.

### Negatives

- Jobs are not retried until the queue is drained (v4 may remedy this)

### Tools

* Bull Board - https://github.com/vcapretz/bull-board
* Bull REPL - https://github.com/darky/bull-repl
