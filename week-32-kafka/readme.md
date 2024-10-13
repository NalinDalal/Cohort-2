10.09.2024

# Kafka

Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.

## What is distributed
You can scale kafka horizontally by adding more nodes that run your kafka `brokers`

## Event streaming
If you want to build a system where one process `produces` events that can be consumed by multiple `consumers`.

## Examples - Payment notifications

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-93fb3e9a3e774670a7d81762154c2f57"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Feadf2285-35e0-4b6e-bdc6-6459d7ad2223%2FScreenshot_2024-07-10_at_2.47.40_PM.png?table=block&amp;id=93fb3e9a-3e77-4670-a7d8-1762154c2f57&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

## Jargon

- Cluster - A group of machines running kafka are known as a kafka cluster
- Broker - Each individual machine is called a broker.
- Producers - As the name suggests, producers are used to publish data to a topic.
- Consumers -  consumers consume from a topic.
- Topic - A topic is a logical channel to which producers send messages and from which consumers read messages. 
- Offsets - Consumers keep track of their position in the topic by maintaining offsets, which represent the position of the last consumed message. Kafka can manage offsets automatically or allow consumers to manage them manually.
- Retention - Kafka topics have configurable retention policies, determining how long data is stored before being deleted. This allows for both real-time processing and historical data replay.

# Start Kafka locally
```bash
docker run -p 9092:9092 apache/kafka:3.7.1
```

get the docker id, then run into another terminal
```bash
docker exec -it <docker id> /bin/bash
```

go to the kafka directory
```bash
cd /opt/kafka/bin
```

create a topic
```bash
./kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092
```

Publish to the topic
```bash
./kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092
``````

consume from the topic, go to another terminal, for same docker id
```bash
./kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
```

now whatever you log into console-producer terminal, it will logged into console-consumer terminal

# Kafka in Node.js Process
initialise
```bash
npm init -y
npx tsc --init
```

Update tsconfig.json
```json
"rootDir": "./src",
"outDir": "./dist"
```


update package.json
```json
"scripts": {
    "start": "tsc -b && node dist/index.js",
    "produce": "tsc -b && node dist/producer.js",
    "consume": "tsc -b && node dist/consumer.js"
},
```

update`index.ts`

run the app
```bash
npm run start
```

# Consumer groups and partitions

## Consumer group
A consumer group is a group of consumers that coordinate to consume messages from a Kafka topic. 

* Purpose:
- Load Balancing: Distribute the processing load among multiple consumers.
- Fault Tolerance: If one consumer fails, Kafka automatically redistributes the partitions that the failed consumer was handling to the remaining consumers in the group.
- Parallel Processing: Consumers in a group can process different partitions in parallel, improving throughput and scalability.

## Partitions
Partitions are subdivisions of a Kafka topic. Each partition is an ordered, immutable sequence of messages that is appended to by producers. Partitions enable Kafka to scale horizontally and allow for parallel processing of messages.

## How is a partition decided?
 When a message is produced to a Kafka topic, it is assigned to a specific partition. This can be done using a round-robin method, a hash of the message key, or a custom partitioning strategy.
Usually you’ll take things like `user id` as the `message key` so all messages from the same user go to the same consumer (so a single user doesnt starve everyone lets say).

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-31961a0ea0f84aefb8e2a146990ff7c6"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd55d31bc-6733-4b44-b29f-c068def20edc%2FScreenshot_2024-07-10_at_5.36.09_PM.png?table=block&amp;id=31961a0e-a0f8-4aef-b8e2-a146990ff7c6&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>


# Partitions in kafka
In this slide, we’ll talk about what are partitions in Kafka
- Create a new topic with 3 partitions
```bash
./kafka-topics.sh --create --topic payment-done --partitions 3 --bootstrap-server localhost:9092
```

- Ensure it has 3 partitions
```bash
./kafka-topics.sh --describe --topic payment-done --bootstrap-server localhost:9092
```

- Update the topic in the node.js script to use `payment-done`
```ts
async function main() {
  await producer.connect();
  await producer.send({
    topic: "payment-done",
    messages: [{
      value: "hi there",
      key: "user1"
    }]
  });
}
///
await consumer.subscribe({
  topic: "payment-done", fromBeginning: true
})
```


- Consume messages in 3 terminals
```bash
npm run consume
```

- produce messages
```bash
npm run produce
```


# Partitioning strategy
When producing messages, you can assign a key that uniquely identifies the event. 
Kafka will hash this key and use the hash to determine the partition. This ensures that all messages with the same key (lets say for the same user) are sent to the same partition.

- Create a new `producer-user.ts` file, pass in a `key` when producing the message

- Add produce:user script
```tsconfig
"produce:user": "tsc -b && node dist/producer-user.js",
```

- Start 3 consumers and one producer. Notice all messages reach the same consumer
```bash
npm run produce:user
```
