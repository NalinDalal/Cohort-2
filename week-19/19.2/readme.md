30.06.2024

# What are we learning today

Pre-requisites - You need to have docker installed on your machine

1. Queues
2. Pub subs
3. Redis
   More specifically, we're learning how we would build a system like leetcode

## Part 1 - Queues

<img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1a563dff-974c-4442-bcca-732b4b17a17f%2FScreenshot_2024-04-07_at_5.41.38_PM.png?table=block&amp;id=1deded56-46a6-4185-b309-36dd27a8c384&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;">

## Part 2(Assignment) - Pub subs

<img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff0f87503-6a54-44f4-b5da-cad536fac51c%2FScreenshot_2024-04-07_at_5.42.49_PM.png?table=block&amp;id=275e7cc4-ded8-4fb6-bc5f-7daaf5b4fa21&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;">

## Part 3 - Final Architecture

<img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa19ddc6b-fe53-4df3-9166-76e4da9f3f45%2FScreenshot_2024-04-07_at_5.45.42_PM.png?table=block&amp;id=28cb2e3e-0f9b-4741-937f-82dffb19d820&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;">

# Redis

Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker
One of the key features of Redis is its ability to keep all data in memory, which allows for high performance and low latency access to data.

Use is connected to a websocket server, but worker doesn't know where to go
Pub-Sub is used to communicate between the worker and the websocket server

<div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F869853ef-8e8c-4b49-b17e-d0ef85f52eb1%2FScreenshot_2024-04-07_at_11.27.27_AM.png?table=block&amp;id=10d57a53-5435-4041-be3f-64cef41445da&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div>

## In memory data structure store

Very similar to a DB, only it is in memory. That doesn’t mean it doesn’t have persistence

- RDB (Redis Database File): The RDB persistence performs point-in-time snapshots of your dataset at specified intervals. It creates a compact single-file representation of the entire Redis dataset. The snapshotting process can be configured to run at specified intervals, such as every X minutes if Y keys have changed.

```txt
save 900 1       # Save the dataset every 900 seconds if at least 1 key changed
save 300 10      # Save the dataset every 300 seconds if at least 10 keys changed
save 60 10000    # Save the dataset every 60 seconds if at least 10000 keys changed
```

- AOF (Append Only File): The AOF persistence logs every write operation received by the server, appending each operation to a file. This file can then be replayed on startup to reconstruct the dataset.

# Starting Redis Locally

Let’s start redis locally and start using it as a DB

```bash
docker run --name my-redis -d -p 6379:6379 redis
```

Connecting to your container

```bash
docker exec -it container_id /bin/bash
```

Connecting to the redis cli

```bash
redis-cli
```

# Redis as a DB

## SET/GET/DEL

- Setting data

  ```bash
  SET mykey "Hello"
  ```

- Getting data

  ```bash
  GET mykey
  ```

- Deleting data
  ```bash
  DEL mykey
  ```

## HSET/HGET/HDEL (H = Hash)

```redis-cli
HSET user:100 name "John Doe" email "user@example.com" age "30"
HGET user:100 name
HGET user:100 email
```

# Redis as a queue

You can also push to a topic / queue on Redis and other processes can pop from it.
Good example of this is Leetcode submissions that need to be processed asynchronously

## Pushing to Queue

```redis
LPUSH problems 1
LPUSH problems 2
```

## Poping from Queue

```redis
RPOP problems
RPOP problems
```

## Blocked Pop

```redis
BRPOP problems 0
BRPOP problems 30
```

The last argument represents the timeout before the blocking should be stopped.

# Talking to redis via Node.js

- Create an empty Node.js project
- Initialize 2 folders inside it
  - express-server
  - worker
- Initialize an empty Node.js typescript project in both of them

```bash
npm init -y
npx tsc --init
```

- Install dependencies in `express-server`

```bash
npm i express @types/express redis
```

- Install dependencies in `worker`

```bash
npm i redis
```

- Create `index.ts` in both `express-server`, `worker`
  code them and then run them

worker->

```bash
tsc -b
node dist/index.js
```

express-server->

```bash
tsc -b
node dist/index.js
```

week 19 done

# Assignment

Create a websocket server that lets users connect and accepts one message from a user which tells the websocket server the users id (no auth)
Make the websocket server subscribe to the pub sub and emit back events to the relevant user
