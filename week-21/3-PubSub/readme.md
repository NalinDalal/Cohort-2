# Pub Sub + Singleton

What if You want to create a system where users can subscribe to the feed of stocks (prices)
This application will be used by >1Mn users
How would you build it?

- Create a PubSubManager class (singleton)
- It keeps track of what all stocks are users on `this server` interested in
- It tells the pub sub whenever a `new stock` is added or a stock is removed from the list of interested stocks on that server
- It relays the events to the right sockets whenever an event is received

```bash
mkdir 3-PubSub
npm init -y
npx tsc --init
npm install redis

```

now initiate the PubSubManager in your docker

```bash
docker run -d -p 6379:6379 redis
docker exec -it 6f02b5dcfbee /bin/bash
redis-cli
```

done
